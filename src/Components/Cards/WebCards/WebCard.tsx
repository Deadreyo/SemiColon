import '../Card.css'
import WebImage from '../../../assets/Web.jpg'
import { Link } from 'react-router-dom'
function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={WebImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Web Dev.</h2>
          <p className="card__description">
            Web development is an exciting field that can lead to many
            opportunities. Learning web development can help you create
            beautiful and interactive websites that can be accessed by millions
            of people around the world. It can also help you develop skills that
            are in high demand in today's job market. Come Join our Community
          </p>
        </div>
        <Link className="btn-title" to="/form">
          <button className="card__button">Join Us</button>
        </Link>
      </div>
    </article>
  )
}

export default Card
