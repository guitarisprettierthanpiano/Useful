import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Header } from './components/Header'

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
        <Route path='useful/' element={<MostRecentHTML />} />
        <Route path='useful/css' element={<MostRecentCSS />} />
        <Route path='useful/js' element={<MostRecentJS />} />
        <Route path='useful/react' element={<MostRecentReact />} />
        <Route path='useful/redux' element={<MostRecentRedux />} />
        <Route path='useful/depen' element={<MostRecentDepen />} />
        <Route index element={<MostRecentHTML />}/>
        <Route path="*" element={<MostRecentHTML />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App