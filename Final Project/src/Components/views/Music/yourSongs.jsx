import React, {Component, useState} from 'react';
import { BsFillCartFill} from "react-icons/bs"
import {Button} from 'react-bootstrap'
import {BsHeartFill} from "react-icons/bs"
import "./music.css"

import {Link, useNavigate } from 'react-router-dom';

const YourSongs = (props) => {
    return ( 
        <> 
        <div className='cart'>
        <BsHeartFill color={"black"}  size={"40px"}/>
        <span className='itemTotal'>{props.elements}</span>
    </div>
    </>
     );
}
 
export default YourSongs;