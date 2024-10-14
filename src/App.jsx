import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    // Fetch the user and token from local storage
    const user = JSON.parse(localStorage.getItem('user'))
    const token = JSON.parse(localStorage.getItem('authToken'))
    if (!user || !token) {
      setLoggedIn(false)
      return
    }

    setUser(user)
    setToken(token)
    setLoggedIn(true)
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} token={token} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser} setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App