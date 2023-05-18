import './FormClosed.css'
function FormClosed() {
  return (
    <div>
      <div className="form-unavailable-message">
        <h2>Sorry, workshop registration has ended.</h2>
        <br />
        Don't be sad though! Registration will open again after the finals!
        Follow our{' '}
        <a href="https://www.facebook.com/elite.team.asu" target="_blank">
          Facebook page
        </a>{' '}
        to stay updated.
      </div>
      <div className="ball-loader">
        <div className="bar">
          <div className="ball"></div>
        </div>
      </div>
    </div>
  )
}

export default FormClosed
