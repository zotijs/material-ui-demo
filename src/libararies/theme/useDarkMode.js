import { useState } from "react";

const useDarkMode = (initialMode = false) => {
  const [isDarkMode, setIsDarkMode] = useState(initialMode);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, setIsDarkMode, toggleDarkMode };
};

export default useDarkMode;
