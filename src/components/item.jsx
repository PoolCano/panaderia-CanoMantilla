import { useState,useEffect } from "react";


const Item = () => {


    const [vehiculos, setVehiculos] = useState([])
    useEffect(()=>{
        const consultarAPI = async () => {
            const url = "https://swapi.dev/api/vehicles/"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            
            const arrayVehiculos = resultado.results.map( vehiculo =>{
                const objetoVehiculo = {
                    nombre: vehiculo.name,
                    modelo: vehiculo.model,
                    precio: vehiculo.cost_in_credits
                }
                
                return objetoVehiculo
            })
            setVehiculos(arrayVehiculos)
        }
        consultarAPI();
    },[])
console.log(vehiculos);

    
return(
    <div>
    {vehiculos.map((vehiculo, index) =>{
        return(
            <div key={index}>
                <h3>{vehiculo.nombre}</h3>
                <div>
                    <h4>Modelo: {vehiculo.modelo}</h4>
                    <h4>${vehiculo.precio}</h4>
                    <hr />
                    
                </div>
            </div>
        )

    }
    
    )}
    </div>
)    


}

export default Item;