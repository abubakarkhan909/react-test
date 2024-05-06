

// eslint-disable-next-line react/prop-types
const Cart = ({ itemImg, itemTitle, itemQuantity, itemPrice }) => {
  return (
    <li>
      <div className="item-thumb">
        <div className="image">
          <img className="img-fluid" src={itemImg} alt="Product Image" />
        </div>
      </div>
      <div className="item-detail">
        <h3>{itemTitle}</h3>
        <div className="item-s">
          <span className="item-quantity">{itemQuantity}</span>
          <span>x</span>
          <span className="item-s item-price">${itemPrice}</span>
        </div>
      </div>
    </li>
  );
};

export default Cart;
