import React, { useContext } from "react";
import { Card, Button } from "antd"
import { CartContext } from "../../context/CartContext";


const CheckoutItem = ({producto, id}) =>{
    const { Meta } = Card;
    const {arrayProducts,setArrayProducts, totalItems, setTotalItems} = useContext(CartContext)
    const deleteFromCart = () => {
      setArrayProducts(arrayProducts.filter(item => (item.id !== id)))
      setTotalItems(totalItems-1)
    }

    return(
    <div>
    <Card hoverable style={{width: 200,}} cover={<img alt={producto.title} src={producto.image} height={180}/>}>
        <Meta title={producto.title} description={producto.price}/>
        <Button onClick={deleteFromCart}>Eliminar del carro</Button>
      </Card>
      </div> 
    )

}

export default CheckoutItem