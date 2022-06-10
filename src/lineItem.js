import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ handleChecked, handleDelete, item }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleChecked(item.id)}
        checked={item.checked}
      />
      {item.item}
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;
