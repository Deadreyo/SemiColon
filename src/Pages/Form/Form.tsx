import { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Form.css'
import Loading from '../../Components/Loading/Loading'
import ThankYou from '../../Components/ThankYou/ThankYou'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

const formData = {
  name: '',
  email: '',
  phone: '',
  collegeId: '',
  year: '',
  firstPreference: '',
  firstPrefKnowledge: '',
  firstPrefReason: '',
  secondPreference: '',
  secondPrefReason: '',
  pastExperience: '',
}

const allOption2 = [
  {
    name: 'Second Preference',
    value: 'no track',
  },
  {
    name: 'Web Dev.',
    value: 'webDev1',
  },
  {
    name: 'Embedded C',
    value: 'webDev2',
  },
  {
    name: 'AVR',
    value: 'webDev3',
  },
]

function Form() {
  const [data, setData] = useState(formData)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [thankMessage, setThankMessage] = useState(false)
  const [select1, setSelect1] = useState('No-track')
  const filterOption2 = allOption2.filter((i) => {
    return (
      (select1 === 'webDev1' && i.value !== 'webDev1') ||
      (select1 === 'webDev2' && i.value !== 'webDev2') ||
      (select1 === 'webDev3' && i.value !== 'webDev3') ||
      select1 === 'No-track'
    )
  })
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
  const handleChangeSecondSelect = (
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
    setSelect1(event.target.value)
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const phoneRegEx = /^01\d{9}$/
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const collegeIdRegEx = /^[0-9]{2}[a-zA-Z0-9][0-9]{4}$/
    if (!phoneRegEx.test(data.phone)) {
      alert('Phone Number is invalid')
      console.log('error')
      setLoading(false)
      setThankMessage(false)
    } else if (!emailRegEx.test(data.email)) {
      alert('Email is invalid')
      console.log('error')
      setLoading(false)
      setThankMessage(false)
    } else if (!collegeIdRegEx.test(data.collegeId)) {
      alert('College ID  is invalid')
      console.log('error')
      setLoading(false)
      setThankMessage(false)
    } else if (
      data.year === '' ||
      data.year === 'No-year' ||
      data.firstPreference === '' ||
      data.secondPreference === 'No-track' ||
      data.firstPrefKnowledge === '' ||
      data.firstPrefReason === '' ||
      data.secondPreference === '' ||
      data.secondPreference === 'no track' ||
      data.secondPrefReason === '' ||
      data.pastExperience === ''
    ) {
      alert('Please fill all inputs')
      setErrorMessage('Please fill all inputs')
      console.log('error')
      setLoading(false)
      setThankMessage(false)
    } else {
      console.log(data)
      setErrorMessage('')
      setTimeout(()=>{
        setThankMessage(true)
      },3000)
      setLoading(true)
      let resData
      try {
        const res = await fetch('http://localhost:9100/participants/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ participant: data }),
        })
        resData = await res.json()
      } catch (err: any) {
        console.log(resData)
        alert('Something Went Wrong')
      }
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
              <Divider>
                <Chip label="Persnal Info" color="warning" />
              </Divider>
              <br />
              <hr className="solid"></hr>
              <div className="input-container ic2">
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
                  id="phone"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">Phone Number.</label>
              </div>
              <div className="input-container ic2">
                <input
                  id="collegeId"
                  className="input"
                  placeholder=" "
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
              <br />
              <hr className="solid"></hr>
              <br />
              <Divider>
                <Chip label="First & Second Preferences" color="warning" />
              </Divider>
              <br />
              <hr className="solid"></hr>
              <div className="drop-down">
                <div className="select">
                  <select
                    className="options"
                    id="firstPreference"
                    onChange={handleChangeSecondSelect}
                  >
                    <option value="No-track">First Preference</option>
                    <option value="webDev1">Web Dev.</option>
                    <option value="webDev2">Embedded C</option>
                    <option value="webDev3">AVR</option>
                  </select>
                </div>
              </div>
              <div className="input-container ic2 text-area">
                <textarea

                  id="firstPrefKnowledge"
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
                  id="firstPrefReason"
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
                  id="secondPreference"
                  onChange={handleChange}
                >
                  {filterOption2.map((op) => (
                    <option key={select1 + op.value} value={op.value}>
                      {op.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="secondPrefReason"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Why interested in 2nd track
                </label>
              </div>
              <hr className="solid"></hr>
              <br />
              <Divider>
                <Chip label="Previous Experience" color="warning" />
              </Divider>
              <br />
              <hr className="solid"></hr>
              <div className="input-container ic2 text-area">
                <textarea
                  id="pastExperience"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Previous Student activity experience
                </label>
              </div>
              <hr className="solid"></hr>
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
