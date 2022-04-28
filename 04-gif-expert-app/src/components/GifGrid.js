import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({ categoria }) => {

    const [images, setimages] = useState([]);

    // use effect evita bucles infinitos de renderizado y solo lo aplica esto solo al cambiar la función contenida 
    useEffect(() => {
        getGifs();
    }, []) // lista vacía significa que solo se renderiza esa función una sola vez

    const getGifs = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=SNK&limit=10&api_key=Z99vhhgJKRwA8cP8syjO5feAu9JNhUEx";
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifts = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifts);
        setimages(gifts)
    }

    return (
        <div>
            <h3>{categoria}</h3>
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img} // permite enviar cada uno de los elementos del objeto como independientes
                    />
                ))
            }
        </div>
    )
}

export default GifGrid