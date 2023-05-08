import '../Card.css'
import FullStackImage from '../../../assets/fullStack.png'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={FullStackImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">FullStack Dev.</h2>
          <p className="card__description">
            Full-stack web development refers to web development taking place in
            both the front and back ends of a website. Full stack web developers
            have the ability to design complete web applications and websites.
            They are proficient in both frontend and backend languages and
            frameworks, as well as in server, network and hosting environments.
          </p>
        </div>

        <a className="btn-title" href="#fullStack">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
