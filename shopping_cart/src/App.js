import react,{useEffect,useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Products from './Pages/Products';
import Login from'./Pages/Login'
import Signup from'./Pages/Signup';
import {AuthContext, FirebaseContext} from './store/Context';
import View from './Pages/View';
import Post from './store/PostContext'

function App() {

  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{ 
  
  setUser(user)
     
  })

})
  return (
 <div className="App">

  <Post>
      <Router>
       <Route exact path="/"> <Home/> </Route>     
       <Route path="/products"> <Products/> </Route>
       <Route path="/login"><Login/></Route>
       <Route path="/signup"><Signup/></Route>
       <Route path="/view"><View/></Route> 
  </Router>
  </Post>
</div>
  );
}

export default App;
