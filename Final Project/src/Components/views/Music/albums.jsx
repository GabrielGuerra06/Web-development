import React, {useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./music.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
import {useEffect, useState} from "react";
import PageFooter from '../../footer';
import Like from './like';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { BsFillCartFill} from "react-icons/bs"
import YourSongs from './yourSongs';


const CLIENT_ID="fb6217880e8d4a24b849e1f23e4aa679";
const CLIENT_SECRET="203080065fa04d63b54bd2e67ff7bb1e";


function Albums(){
  
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);
	const [toggle, setToggle] = useState(false);
    const [like, setLike] = useState([])
    const [albumsLiked, setAlbumsLiked] = useState([])
    const [itemIndex, setItemIndex] = useState(0);
    const [counter, setCounter] = useState(0);
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

      async function Search (){


        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            }
        }
        
        var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => {return data.artists.items[0].id})

        var searchAlbum = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
        .then(response => response.json())
        .then(data => {
            setAlbums(data.items);
           
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
              <h3 className={"description"}> Enter the name of the artist to access their albums </h3>
            <YourSongs elements={counter}/>
            <Container>
                <InputGroup className="search">
                    <FormControl
                    placeholder='Search your favourite albums'
                    type="input"
                    onKeyPress={e =>{
                        if (e.key === "Enter"){
                            Search()
                        }
                    }}
                    onChange={e => setSearchInput(e.target.value)}
                    />
                    
                    <Button className={"boton"} onClick={Search}>
                        Search
                    </Button>
                </InputGroup>
            </Container>

            <Container>
                <Row className="mx-2 row row-cols-4 albums">
                    { albums.map( (album, e)=>{
                        return(
                            <Card className={"cards"}>
                            <Card.Img src={album.images[0].url}/>
                            <Card.Body>
                                <Card.Title>{album.name}</Card.Title>
                                <Button href={album.external_urls.spotify}>Listen</Button>
                                <Button style={{backgroundColor:"black", borderStyle:"solid", borderColor:"black"}} onClick={()=>{toggler()}}>
                                <Like name={album.name} image={album.images[0].url} artist={album.artists[0].name} toggled={toggle}  />
                                </Button>
                            </Card.Body>
                        </Card>
                        )      
                    })}
                </Row>
            </Container>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <PageFooter/>
        </div>
        
    )
}

export default Albums;