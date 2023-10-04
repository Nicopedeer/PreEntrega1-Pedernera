import React, { useState } from "react";
import { Button, Space } from "antd";


const ItemCount  = () => {
    const [contador, SetContador] = useState(1)
    const increaseByOne = ({}) =>{
        SetContador(contador+1)
    }
    const decreaseByOne = () =>{
        contador > 1 && SetContador(contador-1)
    }

    return(
    <Space wrap>
        <Button onClick={decreaseByOne}>-</Button>
        <p>{contador}</p>
        <Button onClick={increaseByOne}>+</Button>
        <Button type="primary">Add to cart</Button>
    </Space>

    )
}

export default ItemCount