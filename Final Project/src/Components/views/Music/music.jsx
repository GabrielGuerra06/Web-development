

import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PageFooter from '../../footer';
import { Card } from 'react-bootstrap';
import {BsJournalAlbum, BsMusicNoteBeamed, BsPersonBadge} from "react-icons/bs"
import { Link } from 'react-router-dom';
import "./music.css";
import {BsHeart, BsHeartFill} from "react-icons/bs"

import NavBar from '../../navBar';

const Music = () => {
  return (
    
 <div className='color-musica'>

   <NavBar/>
      <div className='musicTittle'>Search your music</div>
        <div style={{justifyContent:"center",  display:"flex"}}>
<div class="cards-rounded">
        <Link to="/song">
      <Card className={"circle1"}>
      <Card.Body>
        <br></br>
        <Card.Title className={"cardTittle"}><b>Song</b></Card.Title>
        <Card.Text className={"cardContent"}>
         <BsMusicNoteBeamed size={"180px"} className={"icon1"}/>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

    <Link to="/albums">
    <Card className={"circle2"}>
      <Card.Body>
        <br></br>
        <Card.Title className={"cardTittle"}><b>Albums</b> </Card.Title>
        <Card.Text className={"cardContent"}>
          <BsJournalAlbum size={"180px"} className={"icon1"}/>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

    <Link to="/artist">
    <Card className={"circle3"}>
      <Card.Body>
        <br></br>
        <Card.Title className={"cardTittle"}> <b>Artist</b> </Card.Title>
        <Card.Text className={"cardContent"}>
          <BsPersonBadge size={"180px"} className={"icon1"}/>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
    </div>
  <PageFooter/>
 </div>
  );
}

export default Music;
