// import "./App.css";
import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Car",
    },
    {
      id: 2,
      checked: false,
      item: "Bike",
    },
    {
      id: 3,
      checked: true,
      item: "Tank",
    },
    {
      id: 4,
      checked: false,
      item: "Car",
    },
    {
      id: 5,
      checked: false,
      item: "Bike",
    },
    {
      id: 6,
      checked: true,
      item: "Tank",
    },
    {
      id: 7,
      checked: false,
      item: "Car",
    },
    {
      id: 8,
      checked: false,
      item: "Bike",
    },
    {
      id: 9,
      checked: true,
      item: "Tank",
    },
    {
      id: 10,
      checked: false,
      item: "Car",
    },
    {
      id: 11,
      checked: false,
      item: "Bike",
    },
    {
      id: 12,
      checked: true,
      item: "Tank",
    },
  ]);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    console.log(e);
  };

  const addItem = (item) => {
    const id = item.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  return (
    <div className="App">
      <Header />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
