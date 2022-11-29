import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./music.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
import {useEffect, useState} from "react";
import PageFooter from '../../footer';
import {BsHeart, } from "react-icons/bs"
import { BsFillCartFill} from "react-icons/bs"
import LikeArtist from './likeArtist';

const CLIENT_ID="fb6217880e8d4a24b849e1f23e4aa679";
const CLIENT_SECRET="203080065fa04d63b54bd2e67ff7bb1e";

let flag2 = "false";

function Artists(){
    const [searchArtist, setSearchArtist] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [artists, setArtists] = useState("");
    const [itemIndex, setItemIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {

        var authParameters = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
    }, [])

    async function SearchArtist (){
        flag2= "true"

        var searchParameters3 = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            }
        }
        
        var singerID = await fetch('https://api.spotify.com/v1/search?q=' + searchArtist + '&type=artist', searchParameters3)
        .then(response => response.json())
        .then(data => {return data.artists.items[0].id})

        var searchAlbum = await fetch('https://api.spotify.com/v1/artists/' + singerID + '?market=US&limit=50', searchParameters3)
        .then(response => response.json())
        .then(data => {
            setArtists(data);
           
        })
        
    }

    const toggler = () => {
        toggle ? setToggle(false): setToggle(true)
        itemIndex == 0 ? MusicLiked() : MusicDisliked()
        console.log(itemIndex)
        // console.log(like)
        // setAlbumsLiked([...albumsLiked, `  ${itemIndex}`]);
    }
     const MusicLiked = () => {
          setItemIndex(itemIndex + 1)
           setCounter(counter + 1)
       }

       const MusicDisliked = () => {
            setItemIndex(itemIndex+1)
            setCounter(counter+1)
       }

    return(
        <div className='color-musica'>
             <h3 className={"description"}> Do you want to find an artist? you are in the right place </h3>
    
            <Container>
            
                <InputGroup className="search">
                    <FormControl
                    placeholder='Search your favourite Artists'
                    type="input"
                    onKeyPress={e =>{
                        if (e.key === "Enter"){
                            SearchArtist() 
                        }
                    }}
                    onChange={e => setSearchArtist(e.target.value)}
                    />
                    
                    <Button className={"boton"} onClick={SearchArtist}>
                        Search
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                
                <Row className="mx-2 row row-cols-4"> 
                {flag2 === "true" ?    <Card className={"cards"}>
                            <Card.Img src={artists.images[2].url}/>
                            <Card.Body>
                                <Card.Title>{artists.name}</Card.Title>
                                <Button href={artists.external_urls.spotify}>Listen</Button>   
                                <LikeArtist name={artists.name} image={artists.images[2].url}/>
                            </Card.Body>
                        </Card>   : console.log("") }
                </Row>
            </Container>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <PageFooter/>
           
        </div>
    )
}

export default Artists;