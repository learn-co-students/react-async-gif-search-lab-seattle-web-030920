 import React from 'react'
 
 const GifList = props => {
    
    let renderGifs = (gifList) =>{
        return gifList.map((gif, i) => {
            return (
            <li key={i}>
                <img src={gif}  alt=""></img>
            </li>
            )
        })
    }

     return (
         <div>
             <ul>
                 {renderGifs(props.gifList)}
             </ul>
         </div>
     )
 }
 
 GifList.propTypes = {
 
 }
 
 export default GifList
 