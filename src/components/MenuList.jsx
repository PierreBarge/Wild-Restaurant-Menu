import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <>
      {foodItems.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </>
  );
}

MenuList.propTypes = {
  foodItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      foodImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default MenuList;
