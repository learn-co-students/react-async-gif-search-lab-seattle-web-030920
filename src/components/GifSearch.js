import React from 'react'

class GifSearch extends React.Component {
    state = {
        search: ``
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleFetch(this.state.search)

    }

    handleChange = event => {
        event.persist()
        this.setState({search: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.search} onChange={this.handleChange}></input>
                <button>Find Gifs</button>
            </form>
        )
    }

}
export default GifSearch