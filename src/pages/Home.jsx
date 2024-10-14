import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Form from '../components/Form/Form'

const Home = ({ loggedIn, setLoggedIn, user, token }) => {
    // const [amount, setAmount] = useState('');
    // const [error, setError] = useState('');

    // const navigate = useNavigate()

    // const onButtonClick = () => {
    //     if (loggedIn) {
    //         localStorage.removeItem('user')
    //         localStorage.removeItem('authToken')
    //         setLoggedIn(false)
    //     } else {
    //         navigate('/login')
    //     }
    // }

    // const handlePayment = async () => {
    //     if (!amount) {
    //         setError('Please enter an amount');
    //         return;
    //     }
    //     try {
    //         const txnid = Math.floor(Math.random() * 1000000)
    //         const productinfo = 'Test Product'
    //         const response = await axios.post(
    //             'http://localhost:3000/api/v1/payments/hash',
    //             {
    //                 amount,
    //                 txnid,
    //                 productinfo,
    //                 firstname: user.name,
    //                 email: user.email
    //             },
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         )
    //         console.log(response.data)
    //         const hash = response
    //         // Redirect to PayU payment URL
    //         // window.location.href = response.data.data
    //     } catch (error) {
    //         setError('Error initiating payment')
    //     }
    // }

    // return (
    //     <div className="mainContainer">
    //         <div className={'titleContainer'}>
    //             <div>Welcome!</div>
    //         </div>
    //         <div>This is the home page.</div>
    //         <div className={'buttonContainer'}>
    //             <input
    //                 className={'inputButton'}
    //                 type="button"
    //                 onClick={onButtonClick}
    //                 value={loggedIn ? 'Log out' : 'Log in'}
    //             />
    //             {loggedIn ? <div>Your email address is {user?.email}</div> : <div />}
    //         </div>
    //         {loggedIn &&
    //             <div>
    //                 <h2>Enter Payment Amount</h2>
    //                 <input
    //                     type="number"
    //                     value={amount}
    //                     onChange={(e) => setAmount(e.target.value)}
    //                 />
    //                 <button onClick={handlePayment}>Pay</button>
    //                 <form action='https://test.payu.in/_payment' method='post'>
    //                     <input type="hidden" name="key" value="JP***g" />
    //                     <input type="hidden" name="txnid" value="t6svtqtjRdl4ws" />
    //                     <input type="hidden" name="productinfo" value="iPhone" />
    //                     <input type="hidden" name="amount" value="10" />
    //                     <input type="hidden" name="email" value="test@gmail.com" />
    //                     <input type="hidden" name="firstname" value="Ashish" />
    //                     <input type="hidden" name="lastname" value="Kumar" />
    //                     <input type="hidden" name="surl" value="https://apiplayground-response.herokuapp.com/" />
    //                     <input type="hidden" name="furl" value="https://apiplayground-response.herokuapp.com/" />
    //                     <input type="hidden" name="phone" value="9988776655" />
    //                     <input type="hidden" name="hash" value="dsf" />
    //                     <button type='submit'>Pay Now</button>
    //                 </form>
    //                 {error && <p>{error}</p>}
    //             </div>
    //         }
    //     </div>
    // )

    return <Form user={user} />
}

export default Home