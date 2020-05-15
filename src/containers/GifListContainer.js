 import React, { Component, Fragment } from 'react'
 import GifList from '../components/GifList.js'
 import GifSearch from '../components/GifSearch.js'
 

 class GifListContainer extends Component {

    constructor() {
        super()
    
        this.state = {
            gifList: [],
            query: 'cats'     
        }
    }
    
    componentDidMount(){
        this.fetchGifs(this.state.query)
    }

    formHandler = (search)=> {
        console.log("in form handler with", search, this.state)
        // debugger
        // this.setState({
        //     query: `${search}`
        // })
        this.fetchGifs(search)
    }

    fetchGifs = (query)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(list => {
            this.setState({
                gifList: [list.data[0].images.original.url, list.data[1].images.original.url, list.data[2].images.original.url]
            })
        })
    }

     render() {
         
         const {gifList} = this.state
         return (
             <Fragment>
                <div>
                    <GifSearch formHandler={this.formHandler}/>
                </div>
                <div>
                    <GifList gifList={gifList}/>
                </div>
             </Fragment>

         )
     }
 }
 
 export default GifListContainer
 