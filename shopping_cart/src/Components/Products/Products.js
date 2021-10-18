import React ,{useState,useContext}from 'react'
import { useHistory } from 'react-router'
import { AuthContext, FirebaseContext } from '../../store/Context'
import'./Products.css'


function Products() {

const {firebase} = useContext(FirebaseContext)
const{user}=useContext(AuthContext)
    const[name,setName]=useState('')
    const[about,setAbout]=useState('')
    const[catogory,setCatogory]=useState('')
    const[price,setPrice]=useState('')
    const[image,setImage]=useState(null)
const history=useHistory()

const date=new Date()
    const handleSubmit=(e)=>{
           e.preventDefault()
           firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
            ref.getDownloadURL().then((url)=>{
                console.log(url)
                firebase.firestore().collection('products').add({
                    name,
                    price,
                    catogory,
                    about,
                    url,
                    userId:user.uid,
                    createAt:date.toDateString()
                }).then(()=>{
                    history.push('/')
                })
            })
        })
    }

    return (
        <div className="products">
            <div className="products-main">
              <form onSubmit={handleSubmit}>
                  <h1 className="pro-head">Add Products</h1>
                  <label >Name</label><br />
                  <input 
                  type="text"
                  className="pro-text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                 /><br />
                 
                  <label >About</label><br />
                  <textarea 
                  className="pro-text"
                  value={about}    
                  onChange={(e)=>setAbout(e.target.value)}
                  ></textarea><br />
                  <label >catogory</label><br />
                  <input 
                  type="text" 
                  value={catogory}
                  onChange={(e)=>setCatogory(e.target.value)}
                 /><br />
                 <label >Price</label><br />
                  <input 
                  type="number" 
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                 /><br />
                  <img alt="Posts" width="150px" height="150px"  className="pro-img" src={image? URL.createObjectURL(image):''}></img><br />
                  <input type="file" className="pro-text" onChange={(e)=>{

                         setImage(e.target.files[0])
                  }} />
                  <br />
                  <button className="pro-btn" onClick={handleSubmit}>submit</button>

              </form>

            </div>
        </div>
    )
}

export default Products
