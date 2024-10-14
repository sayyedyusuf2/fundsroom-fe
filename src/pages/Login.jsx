import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = ({ setLoggedIn, setUser, setToken }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const handleLogin = async () => {
        // Set initial error values to empty
        setEmailError('')
        setPasswordError('')

        // Check if the user has entered both fields correctly
        if ('' === email) {
            setEmailError('Please enter your email')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email')
            return
        }

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }

        if (password.length < 7) {
            setPasswordError('The password must be 8 characters or longer')
            return
        }
        try {
            const data = await axios.post('http://localhost:3000/api/v1/users/login', { email, password })
            if (data.data.status === 'success') {
                const user = data.data.data.user
                const token = data.data.data.token
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('authToken', JSON.stringify(token))
                setLoggedIn(true)
                setUser(user)
                setToken(token)
                navigate('/')
            } else {
                alert(data.data.message)
            }
        } catch (e) {
            if (e.response.data.message) {
                alert(e.response.data.message)
            }
        }
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={handleLogin} value={'Log in'} />
            </div>
        </div>
    )
}

export default Login