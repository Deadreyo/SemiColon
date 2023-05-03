import { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Form.css'
import Loading from '../../Components/Loading/Loading'
import ThankYou from '../../Components/ThankYou/ThankYou'

const formData = {
  track: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  experience: '',
}

function Form() {
  const [data, setData] = useState(formData)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading,setLoading] = useState(false)
  const [thankMessage,setThankMessage] = useState(false)
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target
    setData({
      ...data,
      [id]: value,
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      data.track === '' ||
      data.track === 'No-track' ||
      data.firstName === '' ||
      data.lastName === '' ||
      data.email === '' ||
      data.phoneNumber === '' ||
      data.experience === ''
    ) {
      console.log('error')
      setErrorMessage('Please fill all inputs')
      setLoading(false)
      setThankMessage(false)
      
    } else {
      console.log(data)
      setErrorMessage('')
      setLoading(true)
      setThankMessage(true)
    }
  }

  return (
    <>
      <Header />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div id="top-form">
            <div className="title">Welcome</div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="drop-down">
                <div className="select">
                  <select
                    className="options"
                    id="track"
                    onChange={handleChange}
                  >
                    <option value="No-track">Select Track</option>
                    <option value="Web">Web Dev.</option>
                    <option value="Embedded C">Embedded C</option>
                    <option value="AVR">AVR</option>
                  </select>
                </div>
              </div>
              <div className="input-container ic1">
                <input
                  id="firstName"
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
                  id="lastName"
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
                  id="email"
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
                  id="phoneNumber"
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
                  id="experience"
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
            </>
          )}
          {thankMessage && <ThankYou/>}
        </form>
      </div>
    </>
  )
}

export default Form
