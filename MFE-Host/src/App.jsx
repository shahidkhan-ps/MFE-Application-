import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'


const Todo = React.lazy(() => import('todo/Todo'))
const Login = React.lazy(() => import('login/Login'))


function App() {
  const navigate=useNavigate()
  const onSuccess=()=>{
    navigate("/todo",{replace:true})
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login onSuccess={onSuccess}/>}/>
        <Route element={<ProtectedRoute />}>
            <Route path='/todo' element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <Todo />
              </Suspense>
            } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
