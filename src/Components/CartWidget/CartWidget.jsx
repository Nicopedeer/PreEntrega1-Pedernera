import {ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';

const CartWidget = () =>{
    return(
        <Space size={24}>
    <Badge count={5}>
      <Avatar shape="square" icon={<ShoppingCartOutlined />} />
    </Badge>
    </Space>  
    )
}

export default CartWidget