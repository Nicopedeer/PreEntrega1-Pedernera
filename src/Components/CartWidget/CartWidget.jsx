import {ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{
  const {totalItems} = useContext(CartContext)

    return(
        <Space size={24}>
    <Badge count={totalItems}>
      <Link to={`../Checkout`}><Avatar shape="square" icon={<ShoppingCartOutlined />} /></Link>
    </Badge>
    </Space>  
    )
}

export default CartWidget