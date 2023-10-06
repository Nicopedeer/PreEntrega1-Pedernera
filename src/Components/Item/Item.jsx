const Item =({producto}) =>{
    return(
        <div>
            <p>{producto.name}, {producto.precio}</p>
        </div>
    )
}

export default Item