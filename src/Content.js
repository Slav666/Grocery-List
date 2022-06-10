import ItemList from "./itemList";

const Content = ({ items, handleChecked, handleDelete }) => {
  return (
    <main>
      <p>List</p>
      <ItemList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Content;
