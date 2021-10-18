import { useState,useContext } from 'react';
import { useHistory } from 'react-router';
import './Login.css';
import {FirebaseContext} from '../../store/Context';


function Login() {

const [email,setEmail]=useState('')  
const [password,setPassword]=useState('')

const {firebase}=useContext(FirebaseContext)

const history=useHistory()
const handleSubmit=(e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
history.push('/')

  }).catch((error)=>{
    alert("Email or password is wrong")
  })
}
return (
    <div>
      <div className="loginParentDiv">
        <img className="logo" src="https://th.bing.com/th/id/OIP.lgRHdaaiZztqtUG7sN53DQHaHa?w=167&h=180&c=7&r=0&o=5&pid=1.7"></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}            
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Login</button>
        </form>
        <a onClick={()=>{history.push('./signup')}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;