import React from 'react'
import memesData  from './memesData'




export default function Meme() {


    function getMemeImage(){
       const memesArray = memesData.data.memes
     
        
    }
    return(
        <div className='main'>
            <form className='form'>
           <input 
           type='text' 
           placeholder='Top text'
           className='form-inputs'></input>
           <input type='text'
           placeholder='Button text'
           className='data'></input>
           <button className='meme-button' onClick={getMemeImage}>Get a new meme image  🖼</button>
           </form>
        </div>
    )
}