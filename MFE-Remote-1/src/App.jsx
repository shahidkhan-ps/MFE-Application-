import React from 'react'
import TodoInputBar from './components/TodoInputBar.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

function App() {
  return (
    <div>
      <Provider store={store}>
        <TodoInputBar />
      </Provider>
    </div>
  )
}

export default App
