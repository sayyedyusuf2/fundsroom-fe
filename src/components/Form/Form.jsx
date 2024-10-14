import React from "react"
import "./Form.css"
import useForm from "./useForm"
import axios from "axios"

function Form({ user }) {
    const { handleChange, inputs } = useForm()

    const [isMount, setIsMount] = React.useState(false)
    const [hash, setHash] = React.useState("")

    React.useEffect(() => {
        setIsMount(true)
    }, []);

    React.useEffect(() => {
        isMount &&
            axios
                .post('http://localhost:3000/api/v1/payments/hash', {
                    txnid: inputs.txnid,
                    amount: inputs.amount,
                    productinfo: inputs.productInfo,
                    firstname: user.name,
                    email: user.email
                })
                .then((resp) => setHash(resp.data.data))
                .catch((error) => console.log(error.message))
    }, [isMount, inputs])

    return (
        <div className="form">
            <form
                action='https://test.payu.in/_payment'
                method="POST"
            >
                <div className="form__row">
                    <input
                        type="text"
                        name="txnid"
                        value={inputs.txnid}
                        hidden
                    />
                    <input
                        type="text"
                        name="hash"
                        placeholder="Hash value *"
                        value={hash}
                        hidden
                    />
                    <input
                        type="text"
                        name="productInfo"
                        placeholder="Product Info *"
                        value={inputs.productInfo}
                        hidden
                    />
                    <input
                        id="surl"
                        name="surl"
                        value='http://localhost:5173/success'
                        hidden
                    />
                    <input
                        id="furl"
                        name="furl"
                        value='http://localhost:5173/failure'
                        hidden
                    />
                    <input
                        id="key"
                        name="key"
                        value='5EaDb6'
                        hidden
                    />
                </div>
                <div className="form__row">
                    <input
                        type="text"
                        name="firstname"
                        value={user.name}
                        readOnly
                    />
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        readOnly
                    />
                    <input
                        type="number"
                        name="phone"
                        value={inputs.phone}
                        readOnly
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount *"
                        value={inputs.amount}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className="form__row">
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default Form;