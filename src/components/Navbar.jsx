import React from "react";
import Button from "./Button";

import "./Navbar.css"

export function Navbar(props){
    return ( 
        <nav>
            <a href="ironhack.com">Home</a>
            <Button linkTo="https://linkedin.com" prompt="Go to Linkedin,my friend" />
            <Button linkTo="github.com" prompt="Go to Github, my friend" />
            { props.children }
        </nav>
    )
}