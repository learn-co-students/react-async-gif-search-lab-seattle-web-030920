import React, { Component } from 'react'

export class GifSearch extends Component {
    state={
        search:""
    }
    handleChange=(event)=>{
        this.setState({search: event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.fetch(this.state.search)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term:</label>
                <input name="search" onChange={this.handleChange}></input>
                <button type="submit">Find Gifs</button>
            </form>
        )
    }
}

export default GifSearch
