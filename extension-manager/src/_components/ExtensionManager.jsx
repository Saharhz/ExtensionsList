import { useState } from "react";
import data from "../data.json";
import Navbarsecond from "../_components/Navbarsecond";
import List from "../_components/List";

export default function ExtensionManager() {
  const [items, setItems] = useState(data);
  const [selected, setSelected] = useState("all");

  function filter(value) {
    if (value === "active") {
      setItems(data.filter((el) => el.isActive));
    } else if (value === "inactive") {
      setItems(data.filter((el) => !el.isActive));
    } else {
      setItems(data);
    }
    setSelected(value);
  }

  return (
    <div>
      <Navbarsecond selected={selected} onFilter={filter} />
      <List items={items} setItems={setItems} />
    </div>
  );
}
