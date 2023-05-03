import { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Form.css'
import Loading from '../../Components/Loading/Loading'
import ThankYou from '../../Components/ThankYou/ThankYou'

const formData = {
  name:'',
  email: '',
  phoneNumber: '',
  collegeID: '',
  year: '',
  firstPref: '',
  prevExperienceInFirstPref: '',
  whyInterestedInFirstPref: '',
  secondPref: '',
  prevExperienceInSecondPref: '',
  whyInterestedInSecondPref: '',
  studentActivityExperience: '',
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
      data.name === '' ||
      data.email === '' ||
      data.phoneNumber === '' ||
      data.collegeID === '' ||
      data.year === '' ||
      data.year === 'No-year' ||
      data.firstPref === '' ||
      data.firstPref === 'No-track' ||
      data.prevExperienceInFirstPref === '' ||
      data.whyInterestedInFirstPref === '' ||
      data.secondPref === '' ||
      data.secondPref === 'No-track' ||
      data.prevExperienceInSecondPref === '' ||
      data.whyInterestedInSecondPref === '' ||
      data.studentActivityExperience === ''
    ) {
      console.log('error')
      setErrorMessage('Please fill all inputs')
      setLoading(false)
      setThankMessage(false)
      console.log(data)
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
              <div className="input-container ic1">
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut"></div>
                <label htmlFor="first-name" className="placeholder">
                  Name
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
                  Personal email
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
              <div className="input-container ic2">
                <input
                  id="collegeID"
                  className="input"
                  placeholder=" "
                  type="number"
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">College ID</label>
              </div>
              <div className="drop-down">
                <div className="select">
                  <select className="options" id="year" onChange={handleChange}>
                    <option value="No-year">Year</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior 1">Senior 1</option>
                    <option value="Senior 2">Senior 2</option>
                  </select>
                </div>
              </div>
              <div className="drop-down">
                <div className="select">
                  <select
                    className="options"
                    id="firstPref"
                    onChange={handleChange}
                  >
                    <option value="No-track">First Preference</option>
                    <option value="Web">Web Dev.</option>
                    <option value="Embedded C">Embedded C</option>
                    <option value="AVR">AVR</option>
                  </select>
                </div>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="prevExperienceInFirstPref"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Previous Experience in 1st track
                </label>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="whyInterestedInFirstPref"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Why interested in 1st track
                </label>
              </div>
              <div className="select">
                <select
                  className="options"
                  id="secondPref"
                  onChange={handleChange}
                >
                  <option value="No-track">Second Preference</option>
                  <option value="Web">Web Dev.</option>
                  <option value="Embedded C">Embedded C</option>
                  <option value="AVR">AVR</option>
                </select>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="prevExperienceInSecondPref"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Previous Experience in 2nd track
                </label>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="whyInterestedInSecondPref"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Why interested in 2nd track
                </label>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="studentActivityExperience"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Previous Student activity experience
                </label>
              </div>
              <button type="submit" className="submit">
                Submit
              </button>
              <div className="error-mess">{errorMessage}</div>
            </>
          )}
          {thankMessage && <ThankYou />}
        </form>
      </div>
    </>
  )
}

export default Form
