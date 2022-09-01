import Item from "./item";


const ItemList = ({color}) => {

    return(
        <div>
        <h2 style={{backgroundColor: color}}> Catálogo de Vehículos  </h2>
        <Item/>
        </div>
    )
}

export default ItemList;