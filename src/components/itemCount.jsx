import { useState } from "react";
import Mensaje from "./mensaje";

const ItemCount = ({cantidad, setCantidad}) => {

    const [mensaje, setMensaje] = useState('')

    const handleCantidad = (e) => {
        e.preventDefault();

        if(!cantidad || cantidad <0){
            setMensaje('No es una cantidad correcta')
            return
        }

        setMensaje('Cantidad correcta')

    }

    return(
        <div>
            <form onSubmit={handleCantidad}>
                <div>
                    <label>Panes Varios</label>
                    <input type="number" 
                            placeholder='Ingresa cantidad'
                            value={cantidad}
                            onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir al carrito"/>

                {mensaje && <Mensaje>{mensaje}</Mensaje>}
            </form>

        </div>
               
    )

}

export default ItemCount;