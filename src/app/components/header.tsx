import { useRouter } from "next/navigation";
import { useProtectedData } from "../hook/fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./themeToggle";

export default function Header() {
  const { data: user, loading } = useProtectedData();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    router.push("/");
  };

  return (
    <header className="bg-indigo-600 p-4 text-white dark:bg-gray-700">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <span>Olá, {user?.name.toLocaleUpperCase()}</span>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-indigo-800 rounded-md hover:bg-indigo-700"
          >
            {!loading ? (
              "Logout"
            ) : (
              <div className="animate-spin">
                <FontAwesomeIcon icon={faCircleNotch} />
              </div>
            )}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
