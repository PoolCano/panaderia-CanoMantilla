import ItemCount from "../components/itemCount";


const ItemListContainer = ({greeting,color,cantidad, setCantidad}) => {
    return (
        <span>
            <h1 style={{backgroundColor: color}}>{greeting}</h1>
            <ItemCount
                cantidad = {cantidad}
                setCantidad = {setCantidad}
            />
        </span>
        
    )
}

export default ItemListContainer;