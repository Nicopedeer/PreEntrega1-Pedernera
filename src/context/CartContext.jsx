import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({children})=>{
    const [totalItems, setTotalItems] = useState(0)
    const [arrayProducts, setArrayProducts] = useState([])
    const [arrayOrder, setArrayOrder] = useState([])

    

    return(
        <CartContext.Provider value={{totalItems, setTotalItems, arrayProducts, setArrayProducts, arrayOrder, setArrayOrder}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent