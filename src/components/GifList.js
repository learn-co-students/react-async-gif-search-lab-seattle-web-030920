import React from 'react';

const GifList = (props) => {

    const populateGifs = () => {
        return props.gifs.map(gif => {
            return <img src={gif.images.original.url} />
        })
    }

    return(
        <div>
            {populateGifs()}
        </div>
    )
}

export default GifList