import { Link } from 'react-router-dom'
function ThankYou() {
  return (
    <div>
      <button className="submit">
        <Link className="btn-title" to="/">
          Thank You For Registration
        </Link>
      </button>
    </div>
  )
}

export default ThankYou
