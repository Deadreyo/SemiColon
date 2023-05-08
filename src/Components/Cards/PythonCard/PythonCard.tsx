import '../Card.css'
import PythonImage from '../../../assets/python.jpg'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={PythonImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Python</h2>
          <p className="card__description">
            Python is a great programming language for beginners with a simple
            and straightforward syntax. It has a vast range of applications,
            from web development to data analysis and machine learning. With its
            friendly community of developers, there is always someone to turn to
            if you need help or have a question. So why not give Python a
            chance?
          </p>
        </div>

        <a className="btn-title" href="#python">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
