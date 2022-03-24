import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Header } from './components/Header'

import { MostRecent } from './components/MostRecent'
import { MostRecentHTML } from './components/html/MostRecentHTML'
import { MostRecentCSS } from './components/css/MostRecentCSS'
import { MostRecentDepen } from './components/dependencies/MostRecentDepen'
import { MostRecentJS } from './components/js/MostRecentJS'
import { MostRecentReact } from './components/react/MostRecentReact'
import { MostRecentRedux } from './components/redux/MostRecentRedux'


const App: React.FC = ({}) => {
  return (
    <>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<MostRecent />} />

        <Route path='/html' element={<MostRecentHTML />} />
        <Route path='/css' element={<MostRecentCSS />} />
        <Route path='/js' element={<MostRecentJS />} />
        <Route path='/react' element={<MostRecentReact />} />
        <Route path='/redux' element={<MostRecentRedux />} />
        <Route path='/depen' element={<MostRecentDepen />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App