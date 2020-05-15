import React from 'react'

class GifList extends React.Component {

    renderGifs = (gifs) => {
        console.log(gifs.length)
        if (gifs.length !== 0) {
            return (
            <div>
                <li><img src={gifs[0].images.original.url}/></li>
                <li><img src={gifs[1].images.original.url}/></li>
                <li><img src={gifs[2].images.original.url}/></li>
            </div>
            )
        } 
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderGifs(this.props.gifList)}
                    {/* this.props.gifList ? do something : null */}
                </ul>
            </div>
        )
    }

}
export default GifList