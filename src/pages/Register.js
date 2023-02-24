import React, { useState } from 'react'

export default function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmailInput =(e)=>{
      setEmail(e.target.value)
      console.log(email)
  }

  const onPassword=(e)=>{
    setPassword(e.target.value)
    console.log(password)
  }

  const onSubmitData = ()=>{
    const url = "http://localhost:1337/api/customers"
    const data = {
                    "data": {
                      "email": "anildollor@gmail.com",
                      "password": "anildollor"
                    }
                  }
    const options = {
                      method:"POST",
                      headers:{
                        'Content-Type':'application/json'
                      },
                      body:JSON.stringify(data)
                    }

    fetch(url, options)
    .then(
      (res)=>{
        return res.json()
      }
    )
    .then((data)=>{
      console.log(data)
    })
    .catch()
  }

  return (
        <main>
          <form className='offset-2 mt-5 mr-5'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" onChange={onEmailInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" onChange={onPassword} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" onClick={onSubmitData} className="btn btn-primary">register</button>
          </form>
      </main>
  )
}
