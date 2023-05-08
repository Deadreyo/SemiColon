import '../Card.css'
import WebImage from '../../../assets/Web.jpg'
function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={WebImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Front-End</h2>
          <p className="card__description">
            A Front-End Developer is someone who creates websites and web
            applications. The difference between Front-End and Back-End is that
            Front-End refers to how a web page looks, while back-end refers to
            how it works. You can think of Front-End as client-side and Back-End
            as server-side.
          </p>
        </div>

        <a className="btn-title" href="#frontEnd">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
