import './FormClosed.css'
function FormClosed() {
  return (
    <div>
      <div className="form-unavailable-message">
        <h2>Sorry, this form isn't available right now</h2>
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
