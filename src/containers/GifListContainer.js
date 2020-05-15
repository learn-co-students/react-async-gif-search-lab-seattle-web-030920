import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super()
        this.state={
            textValue: "",
            gifs: []
        }
    }

    fetchGif = (gifName) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => this.setState({gifs: json.data}))
    }

    handleEnterText = (event) => {
        this.setState({textValue: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchGif(this.state.textValue)
        this.setState({textValue: ""})
    }

    render() {
        return(
            <div>
                <GifSearch handleEnterText={this.handleEnterText} handleSubmit={this.handleSubmit} textValue={this.state.textValue} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer