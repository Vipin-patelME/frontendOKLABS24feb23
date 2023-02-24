import React, { useState } from 'react'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmailInput =(e)=>{
      setEmail(e.target.value)
      //console.log(email)
    
  }

  const onPassword=(e)=>{
    setPassword(e.target.value)
    //console.log(password)

    
  }

  const onLoginSuccess = ()=>{
    const jwtToken = "vipinjhshfjhsjdhsjhjhsdfhjs"
    localStorage.setItem("jToken", jwtToken)
    window.location.href = "/"
    console.log("Login success")
  }

  const onSubmitData = ()=>{

    const userDetails = JSON.parse(localStorage.getItem("userDetail"))
    //console.log(userDetails)
    //console.log(typeof(userDetails))
    console.log(userDetails.email)
    
    if (email === userDetails.email && password === userDetails.password){
      
      onLoginSuccess()

    }
    else{
        console.log("login fail")
    }
    
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
            <button type="button" onClick={onSubmitData} className="btn btn-primary">Login</button>
          </form>
      </main>
  )
}
