import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("currentTheme");
    const isDarkMode =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("currentTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("currentTheme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const value = useMemo(() => ({ darkMode, toggleTheme }), [darkMode]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside the ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};
