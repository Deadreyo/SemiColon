import './index.css'
import Flutter from './TrackData/Flutter'
import FrontEnd from './TrackData/FrontEnd'
import Python from './TrackData/Python'
import Avr from './TrackData/Avr'
import fullStack from './TrackData/FullStack'
import CProg from './TrackData/C-Prog'
import Arm from './TrackData/Arm'
import Desktop from './TrackData/Desktop'
import ReactTrack from './TrackData/React'
import Nodejs from './TrackData/Nodejs'
import Digital from './TrackData/Digital'
import TrackData from './types/TrackData'
import MainPage from './Pages/Main/MainPage'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SmoothScroll from './Components/SmoothScroll/SmoothScroll'
import React from 'react'
import Form from './Pages/Form/Form'

const tracks: TrackData[] = [
  Python,
  FrontEnd,
  fullStack,
  ReactTrack,
  Nodejs,
  Desktop,
  CProg,
  Avr,
  Arm,
  Flutter,
  Digital,
].sort((a, b) => {
  // sort based on active property
  if (a.active && !b.active) return -1
  if (!a.active && b.active) return 1
  return 0
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage tracks={tracks} />,
  },
  {
    path: '/form',
    element: (
      <SmoothScroll>
        <Form tracks={tracks} />
      </SmoothScroll>
    ),
  },
], {
  basename: '/SemiColon-registration-frontend'
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
