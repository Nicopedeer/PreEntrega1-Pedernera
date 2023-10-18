import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        <h2>Soy el Producto</h2>
        <p>
            {producto?.title}
        </p>
        </>
    )
}

export default ItemDetailContainer