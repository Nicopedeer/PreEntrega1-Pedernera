import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import Item from '../Item/Item';

const ItemListContainer = () => {
    const[products, setProducts] = useState([])
    /*const promiseItems =new Promise ((resolve, reject) =>{
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
       
    })*/
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>{
                (console.log(json))
                setProducts(json)
            })
            
        .catch(error => console.error(error.message))
    },[])
    


    return(
        <>
            <ItemCount />
            {products.length > 0 ? (
                <>
                {products.map((product, id) => <Item key={id} producto={product}/>)}
                </>
            ) : (
                <Spin />
            )}
        </>    

            
        
    )
}

export default ItemListContainer