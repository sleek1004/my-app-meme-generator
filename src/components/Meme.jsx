import React from 'react'
import memesData  from './memesData'


export default function Meme() {

//const [memeImage, setMemeImage]= React.useState("memeImage")
const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
})
    const[allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage(){
       const memesArray = allMemeImages.data.memes
       const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
        
        
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
           <button className='meme-button' onClick={getMemeImage} >Get a new meme image  🖼</button>
           </form>
           <img src={meme.randomImage} alt="" />
        </div>
    )
}