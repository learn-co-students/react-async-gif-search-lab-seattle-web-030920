import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API_URL = "https://api.giphy.com/v1/gifs/search?q="
const API_Key = "&api_key=dc6zaTOxFJmzC&rating=g"


class GifListContainer extends Component {

    state = {returnedGifs:[], searchTerm: ""}

    fetchGifs = (e) => {
        e.preventDefault()
        fetch(`${API_URL}${this.state.searchTerm}${API_Key}`).then(res=>res.json()).then(allGifs => {this.setState({returnedGifs:allGifs.data.slice(0,3)}) })
    }

    updateSearchTerm = (e) => {
        this.setState({searchTerm:e.target.value})
    }

    render(){
        return (
        <div>
            <GifSearch onChangeSearchTerm={this.updateSearchTerm} onSubmitSearch={this.fetchGifs}/>
            <GifList gifs={this.state.returnedGifs}/>
        </div> )
    }
}

export default GifListContainer