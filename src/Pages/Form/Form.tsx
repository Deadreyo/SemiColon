import { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Form.css'

function Form() {
  const [data, setData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (Object.keys(data).length < 6) {
      console.log('error')
      setErrorMessage('Please fill all inputs')
    } else {
      console.log(data)
      setErrorMessage('')
    }
  }

  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <div id="top-form">
          <div className="title">Welcome</div>
        </div>
        <div className="drop-down">
          <div className="select">
            <select className="options" id="Track" onChange={handleChange}>
              <option value="No-track">Select Track</option>
              <option value="Web">Web Dev.</option>
              <option value="Embedded C">Embedded C</option>
              <option value="AVR">AVR</option>
            </select>
          </div>
        </div>
        <div className="input-container ic1">
          <input
            id="First-name"
            className="input"
            type="text"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label htmlFor="first-name" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="Last-name"
            className="input"
            type="text"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label htmlFor="last-name" className="placeholder">
            Last name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="E-mail"
            className="input"
            type="email"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="Phone-number"
            className="input"
            placeholder=" "
            type="number"
            onChange={handleChange}
          />
          <div className="cut cut-short"></div>
          <label className="placeholder">Phone Number.</label>
        </div>
        <div className="input-container ic2 text-area">
          <textarea
            id="Experience"
            className="input"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut cut-short"></div>
          <label className="placeholder">Any Experience</label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
        <div className="error-mess">{errorMessage}</div>
      </form>
    </>
  )
}

export default Form
