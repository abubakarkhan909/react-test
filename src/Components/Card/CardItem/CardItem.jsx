// CardItem.js
import  { useContext } from "react";
import CartContext from "../../../context/context";
import PropTypes from 'prop-types'
import img from "../../Images";
import './CardItem.css'

const CardItem = ({ id, title, paragraph, price, image }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // Assuming you have a function to add items to the cart in your CartContext
    addToCart({ title, price, image, id }); // Pass item details to addToCart function
  };

  return (
    <div className="carditem">
      <div className="cardinner">
        <figure>
          <img src={image ? image : img.CardOne} alt="Product" />
        </figure>
        <div className="content">
          <h3>{title}</h3>
          <p>{paragraph}</p>
          <h4 className="price">${price}</h4>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  id: PropTypes.number
};

export default CardItem;
