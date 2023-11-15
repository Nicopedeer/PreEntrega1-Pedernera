import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { db } from '../../Firebase/Client';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
    const[products, setProducts] = useState([])
    const {category} = useParams()
    useEffect(() => {
        const producstRef =collection(db, "products") 
        const productsRefFilter = query (collection(db, "products"), where ("category", "==" ,`${category}`))
        getDocs(category ? productsRefFilter : producstRef)
        .then((snapshot) => {
            if(snapshot!= null){
                setProducts(snapshot.docs.map(doc => ({id : doc.id, ...doc.data()})))
        }
        
        })
        .catch(error => console.error(error.message))
    },[category])
    


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