"use client";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import { useProtectedData } from "../hook/fetchData";
import { Suspense, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const router = useRouter();
  const { error } = useProtectedData();

  useEffect(() => {
    if (error) {
      router.push("/");
    }
  }, [error, router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {error ? (
        <div className="flex justify-center items-center bg-indigo-600 p-6 text-xl font-bold">
          User not found
        </div>
      ) : (
        <Suspense
          fallback={
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          }
        >
          <Header />
        </Suspense>
      )}
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Dashboard</h1>
      </div>
    </div>
  );
}
