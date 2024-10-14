import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentFailure from './pages/PaymentFailure'
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
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/failure" element={<PaymentFailure />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser} setToken={setToken} />} />
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} setUser={setUser} setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App