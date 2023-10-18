import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { Button, Space } from "antd"

const Item =({producto}) =>{
    return(
        <div>
            <Space>
            <p>{producto.title}, {producto.price}</p>
            <ItemCount />
            <Button type="primary"><Link to={`/products/${producto.id}`}>Ver Mas</Link></Button>
            </Space>
        </div>
    )
}

export default Item