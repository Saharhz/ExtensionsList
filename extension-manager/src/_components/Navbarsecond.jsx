import React, { useState } from "react";
import data from "../data.json";

export default function Navbarsecond() {
  const [items, setItems] = useState(data);
  const [selected, isSelected] = useState(true);

  function filter(value) {
    if (value == "active") {
      setItems(data.filter((element) => element.isActive));
    }
    if (value == "inactive") {
      setItems(data.filter((element) => !element.isActive));
    } else {
      if (value == "all") {
        setItems(data);
      }
    }
    isSelected(value);
  }

  return (
    <div className="sm:flex sm:items-center sm:justify-between shadow-md">
      <h1 className="flex px-3 py-4 text-3xl items-center justify-center font-bold">
        Extensions List
      </h1>
      <div className="flex px-3 items-center justify-center space-x-3">
        <button
          style={{
            backgroundColor:
              selected == "all" ? "hsl(3,77%,44%)" : "hsl(200,60%,99%)",
          }}
          className="bg-[hsl(200,60%,99%)] rounded-3xl px-5 py-2 mb-2"
          onClick={() => filter("all")}
        >
          All
        </button>
        <button
          style={{
            backgroundColor:
              selected == "active" ? "hsl(3,77%,44%)" : "hsl(200,60%,99%)",
          }}
          className="bg-[hsl(200,60%,99%)] rounded-3xl px-4 py-2 mb-2"
          onClick={() => filter("active")}
        >
          Active
        </button>
        <button
          style={{
            backgroundColor:
              selected == "inactive" ? "hsl(3,77%,44%)" : "hsl(200,60%,99%)",
          }}
          className="bg-[hsl(200,60%,99%)] rounded-3xl px-4 py-2 mb-2 hover:bg-[hsl(3,77%,44%)]"
          onClick={() => filter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
