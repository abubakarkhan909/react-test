import './header.css'
import image from '../Images'
import { useState, useEffect, useRef,useContext } from 'react';
import CartContext from '../../context/context';
import Cart from '../Cart/Cart';
import{Link} from 'react-router-dom';

const Header = () => {
  const [showNav, setShowNav] = useState(false); 
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const { cartItems,totalPrice } = useContext(CartContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCart = () => {
    setShow(!show);
  }
  const toggleNav = () => {
    setShowNav(!showNav); 
  };
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header>
      <div className="container">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img className="img-fluid" src={image.logo} alt="LOGO" />
          </Link>
        </div>
        {/* LOGO END */}
        {/* NAV */}
        <div className="navbar">
          <a href="#" className="navbarmenu" onClick={toggleNav}>
            <span />
          </a>
          <nav style={showNav ? { display: 'block' } : null} ref={dropdownRef}>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/"  onClick={scrollToFooter}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* NAV END */}
        <div className="rightbtn">
          <div className="dropdown" ref={dropdownRef}>
            <button className="btn dropdown-toggle" type="button" onClick={toggleCart}>
              <img src={image.cartImage} alt="Cart" />
              <span className="badge badge-secondary">{cartItems.length}</span>
            </button>
            {show && (
              <div className="dropdown-menu">
                <ul className="shopping-cart-items">
                {cartItems.map((item, index) => (
          <Cart
            key={index}
            itemImg={item.image}
            itemTitle={item.title}
            itemQuantity={item.quantity} // Assuming you have quantity in your cart items
            itemPrice={item.price}
          />
        ))}
                  <li>
                    <span className="item-summary total-amount">Total: {totalPrice}</span>
                  </li>
                  <li>
                    <a className="btn" href="#">View Cart</a>
                    <a className="btn btn-primary" href="#">Checkout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
