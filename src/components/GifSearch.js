import React from 'react';

const GifSearch = (props) => {
    
    return(
        <div>
            <form onSubmit={event => props.handleSubmit(event)}>
                <label>Search a gif:</label>
                <input type="text" onChange={event => props.handleEnterText(event)} value={props.textValue}/>
                <button type="submit">Search!</button>
            </form>
        </div>
    )
}

export default GifSearch;