import React from 'react'

const GifGridItem = ({id, title, url}) => {

    // console.log(id, title, url);

    return (
        <div>
            <img src={url} atl={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default GifGridItem