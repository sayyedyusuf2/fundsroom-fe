import { useState } from "react";

const useForm = () => {
  const [inputs, setInputs] = useState({
    phone: '8793289425',
    productInfo: "Test Product",
    amount: "20",
    txnid: new Date().getTime(),
    hash: ""
  })

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  return { handleChange, inputs }
}

export default useForm