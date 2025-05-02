import React, { useEffect, useState } from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export default function NavbarUpper() {
  const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (darkMode) {
  //     root.classList.add("dark");
  //   } else {
  //     root.classList.remove("dark");
  //   }
  // }, [darkMode]);

  function toggleTheme(value) {
    setDarkMode(value);
    document.getElementById("root").classList.toggle("dark");
  }

  return (
    <nav className="flex justify-between items-center border-y-6 border-none md:border-y-8 bg-gray-400 p-3 m-2 md:m-6 rounded-xl">
      <h1 className="text-xl font-bold">Extensions</h1>
      <div className="flex border-4 border-none bg-slate-100 dark:bg-slate-500 rounded-l">
        {darkMode ? (
          <button onClick={() => toggleTheme(false)}>
            <img src={iconSun} />
          </button>
        ) : (
          <button onClick={() => toggleTheme(true)}>
            <img src={iconMoon} />
          </button>
        )}
      </div>
    </nav>
  );
}
