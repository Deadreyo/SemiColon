import '../Card.css'
import FlutterImage from '../../../assets/flutter.jpg'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={FlutterImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Flutter</h2>
          <p className="card__description">
            Flutter is a popular mobile app development framework that allows
            you to build high-quality, natively compiled apps for iOS, Android,
            and the web from a single codebase. This workshop is designed to
            introduce you to Flutter and its key concepts, so that you can start
            building your own mobile apps.
          </p>
        </div>

        <a className="btn-title" href="#flutter">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
