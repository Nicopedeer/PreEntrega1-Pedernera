const Item =({producto}) =>{
    return(
        <div>
            <p>{producto.title}, {producto.price}</p>
            <p>{producto.description}</p>
        </div>
    )
}

export default Item