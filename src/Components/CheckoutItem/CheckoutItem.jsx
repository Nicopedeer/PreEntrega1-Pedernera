import React, { useContext} from "react";
import { Card, Button } from "antd"
import { CartContext } from "../../context/CartContext";


const CheckoutItem = ({producto}) =>{
    const { Meta } = Card;
    const {arrayProducts,totalItems, setTotalItems} = useContext(CartContext)
    const index = arrayProducts.indexOf(producto)

    const deleteFromCart = () => {
      arrayProducts.splice(index, 1)
      setTotalItems(totalItems -1)
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