
import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export class GifListContainer extends Component {

    state={
        gifs:[]
    }
    componentDidMount(){
       this.fetchFunction("code")
    }

    fetchFunction=(query)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=8Ib9YS9GJXQ725rR7lZELPDD25Xtp0W5&rating=g`)
        .then(resp=>resp.json())
        .then(resp=> this.setState({gifs: [resp.data[0],resp.data[1] ,resp.data[2]]}))
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} search={this.state.search}/>
                <GifSearch fetch={this.fetchFunction}/>
            </div>
        )
    }
}

export default GifListContainer
