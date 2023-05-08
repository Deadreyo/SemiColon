import '../Card.css'
import AvrImage from '../../../assets/avr-icon-480x280.jpg'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={AvrImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">AVR</h2>
          <p className="card__description">
            AVR microcontrollers are widely used in a variety of applications,
            from simple DIY projects to complex industrial systems. By the end
            of this course, you will have a solid understanding of how to work
            with AVR microcontrollers and design your embedded systems using
            them.
          </p>
        </div>

        <a className="btn-title" href="#avr">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
