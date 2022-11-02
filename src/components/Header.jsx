import React from 'react'
import troll from './images/troll.png'

export default function Header(){
    return(
        <header className='header'>
            <img  src={troll} className="header-img"
             />
            <h2 className='header-title'>Header component</h2>
            <h4 className='header-project'>React Course - Project 3</h4>
        </header>
    )
}