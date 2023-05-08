import '../Card.css'
import EmbeddedImage from '../../../assets/Embedded C.png'
function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={EmbeddedImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">C-Programming</h2>
          <p className="card__description">
            Operating systems, games, and mobile apps are all made with the help
            of the robust and popular programming language C.
          </p>
        </div>

        <a className="btn-title" href="#cProg">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
