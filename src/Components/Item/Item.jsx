import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { Button, Space, Card } from "antd"



const Item =({producto}) =>{
    const { Meta } = Card;
    return(
    <div>
    <Card hoverable style={{width: 240,}} cover={<img alt={producto.title} src={producto.image} />}>
        <Meta title={producto.title} description={<ItemCount />} />
        <br/>
        <Meta title={<Button type="primary"><Link to={`/products/${producto.id}`}>Ver Mas</Link></Button>}/>
      </Card>
      </div>  


        /*<div>
            <Space>
            <p>{producto.title}, {producto.price}</p>
            <ItemCount />
            <Button type="primary"><Link to={`/products/${producto.id}`}>Ver Mas</Link></Button>
            </Space>
        </div>*/
    )
}

export default Item