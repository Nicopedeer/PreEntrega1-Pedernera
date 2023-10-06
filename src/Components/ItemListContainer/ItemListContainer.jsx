import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import Item from '../Item/Item';

const ItemListContainer = ({greeting}) => {
    const[products, setProducts] = useState([])
    const promiseItems =new Promise ((resolve, reject) =>{
        const ArrayItems =[
            {name : "remera",
            id: 1,
            precio: 2000},
            {name : "remera",
            id: 2,
             precio: 2000},
            {name : "remera",
            id: 3,
            precio: 2000},
        ]
        setTimeout(() =>{
            ArrayItems.length > 0 ? resolve(ArrayItems) : reject("esta vacio")
        },5000)
       
    })
    useEffect(() => {
        promiseItems
        .then(res =>{
            setProducts(res)
        })
        .catch(error => console.error(error.message))
    },[])
    


    return(
        <>
            <h1>
                {greeting}
            </h1>
            <br />
            <ItemCount />
            {products.length > 0 ? (
                <>
                {products.map((product, id) => <Item key={product.id} producto={product}/>)}
                </>
            ) : (
                <Spin />
            )}
        </>    

            
        
    )
}

export default ItemListContainer