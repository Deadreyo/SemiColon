import '../Card.css'
import WebImage from '../../../assets/Web.jpg'
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
          <h2 className="card__title">Front-End</h2>
          <p className="card__description">
            Web development is an exciting field that can lead to many
            opportunities. Learning web development can help you create
            beautiful and interactive websites that can be accessed by millions
            of people around the world. It can also help you develop skills that
            are in high demand in today's job market. Come Join our Community
          </p>
        </div>

        <a className="btn-title" href="#frontEnd">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
