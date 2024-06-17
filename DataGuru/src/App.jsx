/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import Login from './components/LoginPopup/Login'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)


  return (

    <>
      <Sidebar />
      <Main setShowLogin={setShowLogin} />
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
    </>
  )
}

export default App