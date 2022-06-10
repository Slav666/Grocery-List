import LineItem from "./lineItem";
const itemList = ({ items, handleChecked, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default itemList;
