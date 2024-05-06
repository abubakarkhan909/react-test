import { createContext, useState } from "react";

// Create context
const CartContext = createContext();

// Create provider component
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item already exists in the cart, update its quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      // If item does not exist in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Function to clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of items in cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Context value
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
