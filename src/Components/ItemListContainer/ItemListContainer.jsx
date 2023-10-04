import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return(
        <h1>
            {greeting}
            <br />
            <ItemCount />
        </h1>
    )
}

export default ItemListContainer