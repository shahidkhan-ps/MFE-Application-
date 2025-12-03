import React from 'react'
const Login =React.lazy(()=>import('login/Login'))

function App() {
  return (
    <div>
      <Login />
    </div>
  )
}

export default App
