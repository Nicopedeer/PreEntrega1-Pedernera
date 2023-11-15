import React, { useContext, useState } from "react";
import { Button, Space } from "antd";
import { CartContext } from "../../context/CartContext";


const ItemCount  = ({producto}) => {
    const {totalItems, setTotalItems}= useContext(CartContext)
    const {arrayProducts} = useContext(CartContext)
    const [contador, SetContador] = useState(1)

    const increaseByOne = () =>{
        SetContador(contador+1)
    }
    const decreaseByOne = () =>{
        contador > 1 && SetContador(contador-1)
    }
    const addToCart = () =>{
        setTotalItems(totalItems + contador)
        for(let i = 0; i < contador; i++){
            arrayProducts.push(producto)
        }
        SetContador(1)
        
        
    }


    return(
    <Space wrap>
        <Button onClick={decreaseByOne}>-</Button>
        <p>{contador}</p>
        <Button onClick={increaseByOne}>+</Button>
        <Button type="primary" onClick={addToCart}>Agregar al carro</Button>
    </Space>

    )
}

export default ItemCount