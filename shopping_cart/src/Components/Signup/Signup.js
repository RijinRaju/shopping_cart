import { useState,useContext } from 'react';
import { useHistory } from 'react-router';
import { FirebaseContext } from '../../store/Context';
import './Signup.css'

export default function Signup() {
const [username,setUsername]= useState('')
const[email,setEmail]=useState('')
const[phone,setPhone]=useState('')
const[password,setPassword]=useState('')
const[address,setAddress]=useState('')

const {firebase}=useContext(FirebaseContext)
const handleSubmit=(e)=>{
      e.preventDefault()
  
      firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>{
      res.user.updateProfile({displayName:username}).then(()=>{

            firebase.firestore().collection('users').add({
              id:res.user.uid,
              username,
              phone,
              address
            }).then(()=>{history.push('/login')})

      })
})


}
 const history=useHistory()
    return (
      <div>
        <div className="signupParentDiv">
          <img className="logo" src="https://th.bing.com/th/id/OIP.lgRHdaaiZztqtUG7sN53DQHaHa?w=167&h=180&c=7&r=0&o=5&pid=1.7"></img>
          <form  onSubmit={handleSubmit}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="name"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <br />
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
            <label htmlFor="fname">Address</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="address"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
              className="input"
              type="number"
              id="lname"
              name="phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
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
            <button>Signup</button>
          </form>
          <a >Login</a>
        </div>
      </div>
    );
  }