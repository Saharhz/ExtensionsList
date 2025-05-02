import React from "react";
import data from "../data.json";

export default function List() {
  function removeItem(index) {
    setItems(
      items.map((element, i) => {
        if (i == index) return { ...element, isActive: !element.isActive };
        else return element;
      })
    );
  }
  return (
    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div key={index} className="bg-[hsl(200,60%,99%)] rounded-xl">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 flex items-center justify-center rounded-xl space-x-2 m-4">
              <img src={item.logo} className="w-18 h-18 object-contain mb-2" />
            </div>
            <div>
              <h2 className="text-xl p-2 font-semibold">{item.name}</h2>
              <p className="text-gray-600 p-2 text-sm">{item.description}</p>
            </div>
          </div>

          <button
            className="mt-2 mx-6 mb-7 p-2 bg-[hsl(0,0%,93%)] rounded-2xl hover:bg-[hsl(3,77%,44%)]"
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
