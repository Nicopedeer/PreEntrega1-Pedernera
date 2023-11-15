import { Link } from "react-router-dom"
import { Button, Space, Card } from "antd"




const Item =({producto}) =>{
    const { Meta } = Card;
    return(
    <div>
    <Card hoverable style={{width: 200,}} cover={<img alt={producto.title} src={producto.image} height={180}/>}>
        <Meta title={producto.title} description={producto.category}/>
        <br/>
        <Meta title={<Button type="primary"><Link to={`/products/${producto.id}`}>Ver Mas</Link></Button>}/>
      </Card>
      </div>  
    )
}

export default Item