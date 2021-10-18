
import React,{useEffect,useContext,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/Context';
import './Posts.css';
import view from '../View/View'
import { PostContext } from '../../store/PostContext';

function Posts() {
  const {firebase}=useContext(FirebaseContext)
  const [products,setProducts]=useState([])
  const{setPostDetails}=useContext(PostContext)
  
  const history=useHistory()


  useEffect(()=>{
       firebase.firestore().collection('products').get().then((snapshot)=>{
         const allPost=snapshot.docs.map((product)=>{
             return{
               ...product.data(),
               id:product.id
             };
         })
         setProducts(allPost)
         setPostDetails(products)
         
       })

  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map(product=>{
              
             return <div
              className="card"
              onClick={()=>{
               
                history.push('/view')
              }}
            >
              
              <div className="image">
                <img src={product.url} alt="" name="image" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9;{product.price}</p>
                <p className="name">{product.name}</p>
              </div>
            </div>
            })
         
          }
        </div>
      </div>
      <div className="blockbusters">
        <div className="heading">
          <span>Blockbuster Deals</span>
        </div>
        
         <div className="cards">
         {
            products.map(product=>{

                 return<div 
                 className="card"
                 onClick={()=>{
                  setPostDetails(products)
                  history.push('/view')
                }}
                 >
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <p className="name">{product.name}</p>
            </div>
          </div>
            })
        
       }
        </div>
      </div>
    </div>
  );
}

export default Posts;
