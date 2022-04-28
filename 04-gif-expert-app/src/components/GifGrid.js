import React, { useState } from 'react'

const GifGrid = ({ categoria }) => {

    const [count, setCount] = useState(0)


    const getGifs = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=baki&limit=10&api_key=Z99vhhgJKRwA8cP8syjO5feAu9JNhUEx";
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
    }

    getGifs();

    return (
        <div>
            <h3>{categoria}</h3>
            <h3>{count}</h3>
            <button onClick={() => setCount(ct => ct + 1)} >+1</button>
        </div>
    )
}

export default GifGrid