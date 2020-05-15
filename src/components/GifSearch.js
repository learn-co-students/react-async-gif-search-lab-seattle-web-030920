import React, { Component } from 'react'

export class GifSearch extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             formData: ''
        }
    }
    
    handleSubmit = (event)=>{
        event.preventDefault()
        // console.log("in handle form in gifsearch", event.target.query.value)
        this.props.formHandler(event.target.query.value)
    }

    handleChange = (event)=>{      
        this.setState({
            formData: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for Gifs</label>
                    <br></br>
                    <input type="text" name="query" value={this.state.formData} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default GifSearch
