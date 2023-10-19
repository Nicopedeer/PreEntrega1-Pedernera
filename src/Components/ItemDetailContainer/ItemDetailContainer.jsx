import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spin } from "antd"
import './ItemDetailContainer.css'

const ItemDetailContainer = () =>{
    const {id} = useParams()
    const [producto, setProductos] = useState()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setProductos(json)
                console.log(json)
            })
            .catch(error =>console.error(error))
    },[id])

    return(
        <>
        {producto ? (
        <div className="body">
        <div className="containerItems">
        <div className="imgBx">
            <img src={producto.image} alt={producto.title} height={600}/>
        </div>
        <div className="details">
            <div className="content">
                <h2>{producto.title}<br/>
                    <span>{producto.category}</span>
                </h2>
                <p>{producto.description}</p>
                <h3>${producto.price}</h3>
            </div>
        </div>
        </div>
        </div>
         ) :(
            <Spin />
        )}
        </>
    )
}

export default ItemDetailContainer