import { useState, useEffect } from "react";

interface ProtectedData {
  name: string;
  email: string
}

export const useProtectedData = () => {
  const [data, setData] = useState<ProtectedData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem("jwt_token");
        const response = await fetch("/api/get-users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include", // Include cookies if using session-based auth
        });

        if (!response.ok) {
          throw new Error("Failed to fetch protected data");
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProtectedData();
  }, []);

  return { data, loading, error };
};
