import React from "react";
import logo from '../logo.svg'

export default function Navabr(){
    return (
        <nav className='nav'>
            <span className="nav-right">
            <img src={logo}  className='nav-logo' />
            <h3 className='nav-title'>React Facts</h3>
            </span>
            <h5 className='nav-title-left'>React Course - Project 1</h5>
        </nav>
    )
}