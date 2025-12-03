import React from 'react'
import Login from './components/Login.jsx'

function App({onSuccess}) {
  return (
    <div>
      <Login onSuccess={onSuccess}/>
    </div>
  )
}

export default App
