const ItemListContainer = ({greeting,color}) => {
    return (
        <span>
            <h1 style={{backgroundColor: color}}>{greeting}</h1>
        </span>
    )
}

export default ItemListContainer;