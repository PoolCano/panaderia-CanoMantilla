import {useState, useEffect} from 'react'

const ItemCount = ({initial,stock,onAdd}) => {

    const [count,setCount] = useState(parseInt(initial));

const decrementar = () => {
    setCount(count - 1);
}

const incrementar = () => {
    setCount(count + 1);
}

useEffect(() => {
    setCount(parseInt(initial));
},[initial]
)

  return (
    <div>
      <form onClick={e => e.preventDefault()}>
      <label>Ingresa cantidad</label>
        <div>
            <button disabled={count <= 1} onClick={decrementar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock } onClick={incrementar}>+</button>
        </div>
            <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </form>
    </div>
  )
}

export default ItemCount
