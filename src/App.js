// import "./App.css";
import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
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
    console.log(e);
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
