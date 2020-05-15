import React, { Component } from "react";

class GifList extends Component {
    renderGifs = () => {
        return this.props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt="a gif" /></li>)
    }

    render() {
        return(
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}

export default GifList
