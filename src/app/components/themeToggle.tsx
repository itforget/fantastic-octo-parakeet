"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../components/themeProvider";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} size="xl" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
