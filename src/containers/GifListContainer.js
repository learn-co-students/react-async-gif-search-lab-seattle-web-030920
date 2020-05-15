import React, { Component } from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchGifs = (query = "cats") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {
            let threeGifs = gifs.data.slice(0, 3)
            this.setState({gifs: threeGifs})
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch searchGifs={this.fetchGifs} />
            </div>
        )
    }
}

export default GifListContainer
