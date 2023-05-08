import '../Card.css'
import ArmImage from '../../../assets/68057e80-67ee-11eb-8ec5-650ca1fde4e8.jfif'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={ArmImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">ARM</h2>
          <p className="card__description">
            Are you ready to take your embedded systems to the next level? ARM gives you the power to customize your systems to
            meet specific needs, with built-in security features to keep your
            data safe. Plus, with a vast ecosystem of development tools,
            including compilers, debuggers, and simulators, you can collaborate
            and innovate with like-minded developers.
          </p>
        </div>

        <a className="btn-title" href="#arm">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
