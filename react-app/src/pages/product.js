import axios from "axios"
import { useState, useEffect } from "react"

function Product(){

    const [Products, setProducts] = useState([])

    const getAllProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
        setProducts(response.data)

        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=> {
        getAllProducts()
    },[])

    return <div>
        <div style={{display:"grid", justifyContent:"center" , gridTemplateColumns: "300px 300px 300px", margin:"20px", gap:"20px", textAlign:"center"}}>
    {
        Products.map((item,index) => (
            <div className="box" style={{border: "2px solid"}}>
                <img style={{width:"200px", maxHeight:"300px",marginTop:"10px"}} alt="img" src={item.image}></img>
                <h1 style={{fontSize:"16px" , padding: "10px"}}>{item.title}</h1>
                <p style={{fontSize:"20px"}}>${item.price}</p>
            </div>
        ))
    }

        </div>
    </div>
}

export default Product