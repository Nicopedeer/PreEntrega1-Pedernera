import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const[products, setProducts] = useState([])
    const {categoryName} = useParams()
    useEffect(() => {
        const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res=>res.json())
            .then(json=>{
                (console.log(json))
                setProducts(json)
            })
            
        .catch(error => console.error(error.message))
    },[categoryName])
    


    return(
        <>
            {products.length > 0 ? (
                <div className='container'>
                {products.map((product, id) => <Item key={id} producto={product}/>)}
                </div>
            ) : (
                <Spin />
            )}
        </>    

            
        
    )
}

export default ItemListContainer