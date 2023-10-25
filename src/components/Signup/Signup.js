import React,{useState} from 'react'
import axios from 'axios';
import "./Signup.css"

const Signup = () => {

    const[user,setUser] =useState({
        name:"",email:"",password:"",cpassword:""
    })

    const {name,email,password,cpassword} =user;

    function handleInput(e){
        setUser({...user,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();

        // validation
        if(!name || !email || !password || !cpassword){
            alert("All Fields are Required");
        }
        else if( password !== cpassword){
            alert("Password is not Match")
        }
        else{

            axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{ name,email,password})
            .then(response =>{
                console.log(response.data);
                console.log(response.data.message)
                // setToken(response.data.data.token)

                // add token to the local storage
                localStorage.setItem("token",response.data.data.token);
            })
            .catch(err =>
                console.log(err.data.message));
        }

    }
  return (
    <div className='SignUp'>
          
        <h5>Signup</h5>
        <form onSubmit={handleSubmit}>
            <div className='formdiv'>

            <input type='text' placeholder='Enter Your Name' name="name"
            value={user.name} onChange={handleInput}
            />

            <input type='email' placeholder='Enter Your Email' name="email"
            value={user.email} onChange={handleInput}
            />

            <input type='password' placeholder='Enter Your Password' name="password"
            value={user.password} onChange={handleInput}
            />

            <input type='password' placeholder='Enter Your Confirm-Password' name="cpassword"
            value={user.cpassword} onChange={handleInput}
            />

            <button type='submit'>Submit</button>
            </div>

        </form>


    



    </div>
  )
}

export default Signup