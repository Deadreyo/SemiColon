import '../Card.css'
import ReactImage from '../../../assets/react.jpg'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={ReactImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">React</h2>
          <p className="card__description">
            AVR microcontrollers are used in many devices around us like cars,
            medical equipment, and home appliances. Learning AVR programming can
            help you develop skills that are in high demand in today's job
            market.
          </p>
        </div>

        <a className="btn-title" href="#react">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
