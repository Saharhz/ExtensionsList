import React, { useState } from "react";

export default function Navbarsecond({ selected, onFilter }) {
  if (typeof onFilter !== "function") {
    console.error("onFilter is not a function!", onFilter);
    console.log("onFilter type:", typeof onFilter);
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
          onClick={() => onFilter("all")}
        >
          All
        </button>
        <button
          style={{
            backgroundColor:
              selected == "active" ? "hsl(3,77%,44%)" : "hsl(200,60%,99%)",
          }}
          className="bg-[hsl(200,60%,99%)] rounded-3xl px-4 py-2 mb-2"
          onClick={() => onFilter("active")}
        >
          Active
        </button>
        <button
          style={{
            backgroundColor:
              selected == "inactive" ? "hsl(3,77%,44%)" : "hsl(200,60%,99%)",
          }}
          className="bg-[hsl(200,60%,99%)] rounded-3xl px-4 py-2 mb-2"
          onClick={() => onFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
