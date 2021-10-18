
import react,{useContext,useRef}  from "react";
import './Header.css';
import {useHistory} from 'react-router'
import { AuthContext, FirebaseContext } from "../../store/Context";


function Header(){

const {user}=useContext(AuthContext)
const{firebase}=useContext(FirebaseContext)
    const history=useHistory()
    
    return(
        <div className="header">
        <img src="https://th.bing.com/th/id/OIP.lgRHdaaiZztqtUG7sN53DQHaHa?w=167&h=180&c=7&r=0&o=5&pid=1.7" alt=""  className="site-logo" onClick={()=>history.push('/')}/>
       <input type="text" placeholder='search' className="header-search" />
       <button className="header-btn">search</button>
       <span className="header-log" onClick={()=>history.push('/login')}>{user?"hello,"+ user.displayName:'Login'}</span>
       {user && <span className="header-logout" onClick={()=>{
           firebase.auth().signOut().then(()=>{
               history.push('/login')
           })
       }}>Logout</span>}
    
 <img src="https://static.vecteezy.com/system/resources/previews/000/500/220/original/shopping-cart-icon-design-vector.jpg" alt="cart-logo" className="header-cartlogo" />
    
        </div>
    )
}
export default Header;