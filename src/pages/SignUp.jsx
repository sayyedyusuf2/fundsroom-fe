import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import img from '../assets/img.jpg'

const SignUp = ({ setLoggedIn, setUser, setToken }) => {
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
            const data = await axios.post('http://54.167.231.236/api/v1/users/login', { email, password })
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
        <section>
            <div className='container pt-5 w-75 m-auto mt-5'>
                <div className='row'>
                    <div className='col-6 px-0'>
                        <img src={img} className='img-fluid' />
                    </div>
                    <div className='col-6 p-4 pt-0' style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <h2 className='text-center pb-2'>LOGIN</h2>
                        <div>
                            <div>
                                <label for="exampleFormControlInput1" className="form-label" style={{fontSize: '16px'}}>Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    value={email}
                                    placeholder="Enter your email here"
                                    onChange={(ev) => setEmail(ev.target.value)} 
                                />
                                <p style={{fontSize: '12px', color: 'red', marginTop: '0.2rem'}}>{emailError}</p>
                            </div>
                            <div>
                                <label for="inputPassword5" className="form-label">Enter Password</label>
                                <input 
                                    type="password" 
                                    id="inputPassword5" 
                                    className="form-control" 
                                    aria-describedby="passwordHelpBlock" 
                                    value={password}
                                    placeholder="Enter your password here"
                                    onChange={(ev) => setPassword(ev.target.value)} 
                                />
                                <p style={{fontSize: '12px', color: 'red', marginTop: '0.2rem'}}>{passwordError}</p>
                            </div>
                            <div className='text-center'>
                                <button type="submit" onClick={handleLogin} value={'Log in'} className="btn btn-primary w-100">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default SignUp