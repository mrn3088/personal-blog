"use client";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // 获取当前模式
  useEffect(() => {
    const currentMode = document.documentElement.classList.contains("dark");
    setDarkMode(currentMode);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={48} />
  );
};

export default DarkModeButton;
