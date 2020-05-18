import React, {Component} from 'react'

class GifList extends Component {

    showGif = () => {
        return this.props.gifs.map(gif => {
        return (<li key={gif.id}><h3>{gif.title}</h3> <img src={gif.images.original.url} height="150" alt={gif.title}></img> </li>)
        })
    }

    render(){
        return <ul> <h1>Top 3 Gifs</h1>
            {this.showGif()}
        </ul>
    }
}

export default GifList