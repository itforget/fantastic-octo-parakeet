import { useRouter } from "next/navigation";
import { useProtectedData } from "../hook/fetchData";

export default function Header() {
  const { data: user, loading, error } = useProtectedData();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-indigo-600 p-6 text-xl font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(user);
  return (
    <header className="bg-indigo-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <span>Olá, {user ? user.name.toLocaleUpperCase() : "Usuário"}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-indigo-800 rounded-md hover:bg-indigo-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
