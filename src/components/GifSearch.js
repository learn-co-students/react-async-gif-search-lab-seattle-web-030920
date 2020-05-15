import React, { Component } from "react";

class GifSearch extends Component {
    state = {
        search: ""
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.searchGifs(this.state.search)
        this.setState({search: ""})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                Enter a Search Term: <br />
                <input type="text" value={this.state.search} onChange={this.handleChange} /><br />
                <button type="submit">Find Gifs</button>
            </form>
        )
    }
}

export default GifSearch
