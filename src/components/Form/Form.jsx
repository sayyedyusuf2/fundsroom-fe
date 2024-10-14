import React from "react"
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
                .post('http://54.167.231.236/api/v1/payments/hash', {
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
    <section className="pt-5" style={{ backgroundColor: '#ABDCFF', height: "100vh",backgroundImage:'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)' }}>
        <div className="container mt-5">
            <div className="card w-75 m-auto p-4">
                <form
                    action='https://test.payu.in/_payment'
                    method="POST"
                >
                    <div>
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
                    <div className="row p-2">
                        <div className='col-6'>
                            <input
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                type="text"
                                name="firstname"
                                value={user.name}
                                readOnly
                            />
                        </div>
                        <div className="col-6">
                            <input
                                name="email"
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                value={user.email}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-6">
                            <input
                                className="form-control col-6" 
                                id="exampleFormControlInput1" 
                                type="number"
                                name="phone"
                                value={user.phone}
                                readOnly
                            />
                        </div>
                        <div className="col-6">
                            <input
                                className="form-control col-6" 
                                id="exampleFormControlInput1" 
                                type="number"
                                name="amount"
                                placeholder="Amount *"
                                value={inputs.amount}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <button type="submit" className="btn btn-primary">Pay Now</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
}

export default Form;