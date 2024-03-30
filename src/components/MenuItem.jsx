import PropTypes from "prop-types";
import { useState } from "react";

function MenuItem({ item }) {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  const handleClickFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={item.foodImage} alt="" />
        <figcaption>
          <h2>{item.itemName}</h2>
          <p>{item.description}</p>
        </figcaption>
      </figure>
      <span>{item.price} EUR</span>
      <button onClick={handleClickFavorite}>{isFavorite ? "❤️" : "🖤"}</button>
    </section>
  );
}

MenuItem.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      foodImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default MenuItem;
