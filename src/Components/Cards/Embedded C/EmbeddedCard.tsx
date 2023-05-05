import React from 'react'
import '../Card.css'
import EmbeddedImage from '../../../assets/Embedded C.png'
import { Link } from 'react-router-dom'
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
          <h2 className="card__title">Embedded C</h2>
          <p className="card__description">
            Embedded C programming is not just about creating embedded systems,
            it's also about creating software that interacts with hardware.
            Learning Embedded C programming can help you develop skills in
            programming languages like C which are essential for creating
            embedded systems.
          </p>
        </div>
        <Link className="btn-title" to="/form">
          <button className="card__button">Join Us</button>
        </Link>
      </div>
    </article>
  )
}

export default Card
