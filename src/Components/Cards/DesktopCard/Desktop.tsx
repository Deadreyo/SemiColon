import '../Card.css'
import Desktop from '../../../assets/CC--.png'
function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={Desktop}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Desktop</h2>
          <p className="card__description">
            Welcome to the exciting world of C++ and Qt application development!
            C++ is one of the most important programming languages in the world,
            and it has been used to create some of the most complex and powerful
            desktop applications that we use every day. From operating systems
            to video games, C++ has proven time and again that it is an
            essential language for any developer to learn.
          </p>
        </div>

        <a className="btn-title" href="#desktop">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
