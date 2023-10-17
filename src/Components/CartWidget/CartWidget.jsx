import {ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    return(
        <Space size={24}>
    <Badge count={5}>
      <Link to={`../Checkout`}><Avatar shape="square" icon={<ShoppingCartOutlined />} /></Link>
    </Badge>
    </Space>  
    )
}

export default CartWidget