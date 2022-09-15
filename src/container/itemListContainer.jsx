
import ItemList from "../components/itemList";


const ItemListContainer = ({greeting,color}) => {

    

    return (
        <span>
            <h1 style={{backgroundColor: color}}>{greeting}</h1>
            
            <ItemList/>

        </span>
        
    )
}

export default ItemListContainer;