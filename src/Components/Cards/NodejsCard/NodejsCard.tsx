import '../Card.css'
import NodejsImage from '../../../assets/nodejs.png'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={NodejsImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Node.js</h2>
          <p className="card__description">
            Welcome to the Node.js course! In this course, you will learn the
            fundamentals of server-side development with Node.js. Node.js is a
            popular and powerful JavaScript runtime that allows developers to
            build fast, scalable, and event-driven server-side applications. You
            will learn how to build and deploy server-side applications using
            Node.js and other popular web development technologies.
          </p>
        </div>

        <a className="btn-title" href="#nodejs">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
