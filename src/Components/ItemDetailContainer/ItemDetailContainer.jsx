import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spin } from "antd"
import './ItemDetailContainer.css'
import ItemCount from "../ItemCount/ItemCount"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/Client"

const ItemDetailContainer = () =>{
    const {id} = useParams()
    const [producto, setProductos] = useState()

    useEffect(() => {
        const productRef = doc(db, "products", `${id}`)
        getDoc(productRef)
        .then((snapshot) => {
            if(snapshot.exists())
            setProductos(snapshot.data())
        })
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
                <h4>${producto.price}</h4>
                <ItemCount producto={producto} />
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