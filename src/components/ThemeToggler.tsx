'use client';
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14"
    >
      {theme === "dark" ? (
        <FontAwesomeIcon
          icon={faSun}
          className="h-5 w-5 text-yellow-500 md:h-6 md:w-6"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="h-5 w-5 text-gray-500 md:h-6 md:w-6"
        />
      )}
    </button>
  );
};

export default ThemeToggler;
