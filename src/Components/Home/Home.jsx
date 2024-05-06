import Header from "../Header/Header"
import HeroSection from "../HeroSection/HeroSection"
import Card from "../Card/Card";
import { useContext } from "react";
import CartContext from "../../context/context";
import Footer from "../Footer/Footer";
const Home = () => {

  const {cartItems} = useContext(CartContext);
  console.log(cartItems);

  return (
    <div>
      <Header/>
      <div className="main_container">
        <HeroSection/>
        <Card/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
