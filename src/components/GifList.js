import React, { Component } from 'react'

export class GifList extends Component {
    makeList=()=> {
        return this.props.gifs.map(currentGif=> <li key={currentGif.url}><img src={currentGif.images.original.url} alt={this.props.search}/></li> )
    }
    render() {
        return (
            <ul>
                {this.makeList()}
            </ul>
        )
    }
}

export default GifList
