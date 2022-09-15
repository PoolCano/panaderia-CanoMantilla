import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from "../components/itemCount";

const ItemDetail = ({data}) => {

  const [iraCart,setIraCart] = useState(false);

  const onAdd = (cantidad) =>{
    setIraCart(true);

}
  return (
    <div>
      <div>
        <img src={data.thumbnail} alt="" />
        <div>
            <h1>{data.title}</h1>
            {
              iraCart? <Link to='/cart'>Completar compra</Link>
              :<ItemCount
              initial={3}
              stock={5}
              onAdd={onAdd}
              />
            }
        </div>
      </div>
    </div>
  );
}

export default ItemDetail
