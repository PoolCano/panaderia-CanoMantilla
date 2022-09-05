import ItemCount from "../components/itemCount";


const ItemListContainer = ({greeting,color}) => {

    const onAdd = (cantidad) =>{
        console.log(`Compraste ${cantidad} unidades`)

    }

    return (
        <span>
            <h1 style={{backgroundColor: color}}>{greeting}</h1>
            <ItemCount
            initial={3}
            stock={5}
            onAdd={onAdd}
            />
        </span>
        
    )
}

export default ItemListContainer;