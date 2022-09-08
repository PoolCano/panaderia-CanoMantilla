import {useState, useEffect} from 'react'
import ItemDetail from '../components/ItemDetail'


const product = {id: "MLA1148530623", thumbnail: "https://api.mercadolibre.com/sites/MLA/search?q=Ferrari", 
title: "Ferrari 599 F1"};

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(product);
            }, 2000);

        });
            getData.then(res => setData(res));
    },[])
    return (
        <ItemDetail data={data} />
    );

}

  
export default ItemDetailContainer
