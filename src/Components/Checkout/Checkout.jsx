import React, { useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { db } from '../../Firebase/Client';
import './Checkout.css'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Checkout = () =>{
    const {arrayProducts,setArrayProducts, setTotalItems,arrayOrder, setArrayOrder} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const [disable, setDisable] = useState(false)
    const [orderId, setOrderId] = useState()

    
    
    useEffect(() => {
        setTotalPrice(arrayProducts.reduce((prev, next) => prev + next.price, 0))
        setArrayOrder([... new Set(arrayProducts.map((prod => ({title: prod.title, price:prod.price}))))])
    },[arrayProducts])

    const sendOrder = (ev) =>{
        ev.preventDefault()
        const name = ev.target.text.value
        const phone = ev.target.phone.value
        const email = ev.target.email.value
        setDisable(true)
        const order = {
            buyer:{name:{name}, phone:{phone}, email:{email}},
            items:{... arrayOrder},
            total:{totalPrice},
            date: serverTimestamp()
        }
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
        

    }

    const clearCart = () => {
        setTotalItems(0)
        setArrayProducts([])
    }

    return(
    <>
    {arrayProducts.length > 0 ? (
    <div className='container'>
        {arrayProducts.map((product, id) => <CheckoutItem key={id} producto={product}/>)}
        <div className="form-box">
                <form className="form" onSubmit={ev => sendOrder(ev)}>
                    <span className="title">Total:${totalPrice}</span>
                    <div className="form-container">
                        <input type="text" name="text" className="input" placeholder="Nombre Completo" disabled={disable} required/>
			            <input type="email" name="email" className="input" placeholder="Email" disabled={disable} required/>
			            <input type="number" name="phone" className="input" placeholder="Telefono" disabled={disable} required/>
                    </div>
                    <button type="submit" disabled={disable}>Finalizar Compra</button>
                    <Button onClick={clearCart} type="primary" disabled={disable}>Vaciar Carro</Button>

                </form>
                {disable == true &&
                <>
                <p className="title">Compra finalizada</p>
                <p className="input">Id de su compra:{orderId}</p> 
                <Button onClick={clearCart} type="link"><Link to={'/'}>Volver a inicio</Link></Button>
                </>}
            </div>
    </div>
    ) : (
    <div className="form">
        <h1>El carro esta vacio</h1>
        <Button type="link"><Link to={'/'}>Comenzar a comprar</Link></Button>
    </div>

    )}
    
    </>
    )

}

export default Checkout