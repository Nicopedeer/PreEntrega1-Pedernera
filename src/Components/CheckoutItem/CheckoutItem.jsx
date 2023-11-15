import { Card } from "antd"



const CheckoutItem = ({producto}) =>{
    const { Meta } = Card;

    return(
    <div>
    <Card hoverable style={{width: 200,}} cover={<img alt={producto.title} src={producto.image} height={180}/>}>
        <Meta title={producto.title} description={producto.price}/>
      </Card>
      </div>  
    )

}

export default CheckoutItem