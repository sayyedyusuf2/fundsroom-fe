import { useState } from "react";

const useForm = () => {
  const [inputs, setInputs] = useState({
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