import React, {Component} from 'react'

class GifSearch extends Component {
    render(){
        return (
            <form onSubmit={this.props.onSubmitSearch}>
                <input type="textarea" name="searchField" placeholder="Enter Search Term" onChange={this.props.onChangeSearchTerm}></input>
                <button type="submit">Search for GIFs</button>
            </form>
        )
    }
}

export default GifSearch