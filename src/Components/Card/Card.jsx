import './Card.css'
import CardItem from "./CardItem/CardItem"
import  image  from '../Images'
const Card = () => {


  const data = [
    {
      id: 1,
      title: ' Lorem ipsum1',
      paragraph: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 300,
      image: image.CardOne
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit',
      paragraph: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 300,
      image: image.CardOne
    },
    {
      id: 3,
      title: ' Lorem ipsum dolor3',
      paragraph: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 300,
      image:image.CardOne
    }
  ]
  return (
    <div className="cards" id="cards">
      <div className="heaidng_dd">
        <div className="container">
          <h2 className>
            Lorem ipsum dolor sit amet. 
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.®
          </p>
        </div>
      </div>
      <div className="container">
        <div className="cardslist">

          {data.map((value) => {

           return <CardItem key={value.id} title={value.title} paragraph={value.paragraph} price={value.price} image={value.image} id={value.id}/>

          })}
        </div>
      </div>
    </div>

  )
}

export default Card
