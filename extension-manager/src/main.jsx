import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavbarUpper from "./_components/NavbarUpper.jsx";
import Navbarsecond from "./_components/Navbarsecond.jsx";
import List from "./_components/List.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarUpper />
    {/* <Navbarsecond /> */}
    {/* <List /> */}
    <App />
  </StrictMode>
);
