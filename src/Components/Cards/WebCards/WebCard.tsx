import React from 'react'
import './WebCard.css'
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
          <h2 className="card__title">Web Dev.</h2>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
            labore laudantium deserunt fugiat numquam.
          </p>
        </div>
        <button className="card__button">Join Us</button>
      </div>
    </article>
  );
}

export default Card
