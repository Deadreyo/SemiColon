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
            In this workshop, you will have the opportunity to dive deep into
            the world of React and see how it can be used to develop web
            applications. You will learn how to build interactive and dynamic
            user interfaces, integrate with APIs, and much more. Some examples of popular web
            applications built with React include Facebook, Instagram, and
            Netflix.
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
