import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }
    
    handleFetch = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res=>res.json())
        .then(json=>this.setState({gifs: json.data.slice(0,3)}))
        
    }

    render() {
        return (
            <div>
                <GifSearch handleFetch={this.handleFetch}/>
                <GifList gifList={this.state.gifs}/>
            </div>)
    }
}
export default GifListContainer