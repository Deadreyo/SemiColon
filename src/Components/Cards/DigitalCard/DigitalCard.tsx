import '../Card.css'
import DigitalImage from '../../../assets/digital.jpg'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={DigitalImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Digital</h2>
          <p className="card__description">
            EDA is the way to go deeper in how most electronics devices such as
            micro-processors , memories , communications devices are brought to
            your hand and to use it in form of laptops , smart phones ,…etc. in
            fact it’s a long journey go through mainly three steps design the
            architecture of the device then verify and finally the layout step
            to extract the product .
          </p>
        </div>

        <a className="btn-title" href="#digital">
          <button className="card__button">Read more</button>
        </a>
      </div>
    </article>
  )
}

export default Card
