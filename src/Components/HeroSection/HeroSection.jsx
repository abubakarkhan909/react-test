import  image from '../Images'
import './HeroSection.css'
const HeroSection = () => {
const MovetoCard = () => {
    const moveToCard = document.getElementById('cards');
    moveToCard.scrollIntoView({ behavior: 'smooth' });
};
  return (
    <div className="main_banner" style={{background: `url(${image.HeroBanner})center no-repeat`}}>
      <div className="container">
        <div className="content">
          <h1>
             Lorem ipsum.<sup>®</sup>
          </h1>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <a href="#cards" className="btn btn-primary" onClick={MovetoCard}> Call to Action</a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
