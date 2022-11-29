import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./music.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
import {useEffect, useState} from "react";
import PageFooter from '../../footer';
import LikeSongs from './likeSongs';
import { BsFillCartFill} from "react-icons/bs"
import {BsHeart, BsHeartFill} from "react-icons/bs"


const CLIENT_ID="fb6217880e8d4a24b849e1f23e4aa679";
const CLIENT_SECRET="203080065fa04d63b54bd2e67ff7bb1e";
let flag = "false";
// const initialList = [];
function Song(){
    const [searchSong, setSearchSong] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [songs, setSongs] = useState("");
    // const [list, setList] = React.useState([]);
    // const [totalItemCount, setTotalItemCount] = useState(0);
   
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

    async function SearchSongs(){
        flag = "true"
        var searchParameters2 = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            }
        }
        var songID = await fetch('https://api.spotify.com/v1/search?q=' + searchSong + '&type=track', searchParameters2)
        .then(response => response.json())
        .then(data => {return data.tracks.items[0].id })
        
        var searchSongs = await fetch('https://api.spotify.com/v1/tracks/' + songID  + '?market=US&limit=50', searchParameters2)
        .then(response => response.json())
        .then(data => {
            setSongs(data);
                
        })    
    } 
    // const handleAddButtonClick = () => {
	// 	const newItem = {
	// 		itemName: searchSong,
	// 		isSelected: false,
	// 	};

	// 	const newItems = [...items, newItem];
	// 	setItems(newItems);
	// 	setSearchSong('');
	// 	calculateTotal();
	// };

    // const toggleComplete = (index) => {
	// 	const newItems = [...items];

	// 	newItems[index].isSelected = !newItems[index].isSelected;

	// 	setItems(newItems);
	// };

    return(
        <div className='color-musica'>
            <h3 className={"description"}> Here you can find all the songs you want by entering their name </h3>
           
            <Container>
                <InputGroup className="search">
                    <FormControl
                    placeholder='Search your favourite Songs'
                    type="input"
                    onKeyPress={e =>{
                        if (e.key === "Enter"){
                            SearchSongs()
                            
                        }
                    }}
                    onChange={e => setSearchSong(e.target.value)}
                    />
                    
                    <Button className={"boton"} onClick={SearchSongs}>
                        Search
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                
                <Row className="mx-2 row row-cols-4"> 
                {flag === "true" ?    <Card className={"cards"}>
                            <Card.Img src={songs.album.images[0].url} />
                            <Card.Body>
                                <Card.Title key={songs.id}>{songs.name}</Card.Title>
                                <div>{songs.artists[0].name}</div>
                                <Button href={songs.external_urls.spotify} >Listen</Button> 
                                <div>
                                <LikeSongs song={songs.name} name={songs.artists[0].name}  image={songs.album.images[0].url}/>
                                </div>
                            </Card.Body>
                        </Card>   : console.log("") }
                </Row>
            </Container>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <PageFooter/>
        </div>
    )
}

export default Song;