import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./styles.css";
import image1 from "../images/element.png"
import { Link } from 'react-router-dom';

const CardContent = () => {
    return ( 
      <>
      <div className='musicTittle'>The Power of  Music</div>
        <div style={{justifyContent:"center",  display:"flex"}}>
<Card className={"card1"}>
      <Card.Body>
        <br></br>
        <Card.Title className={"cardTittle"}><b>Blatzi</b> Collection</Card.Title>
        <Card.Text className={"cardContent"}>
          The best songs of all time and the moment. Everything in the<br></br>best music  website
        </Card.Text>
        <Link to="/music">
        <Button className={"cardButton"}><b>Explore</b></Button>
        </Link>
      </Card.Body>
    </Card>
    <br></br>
    </div> 

    <div style={{justifyContent:"center",  display:"flex"}}>
    <Card className={"card2"}>
      <Card.Body>
        <br></br>
        <Card.Title className={"cardTittle"}><b>PLANS</b> </Card.Title>
        <Card.Text className={"cardContent"}>
          Music for All
          <br></br><br></br>
          Blatzi offers you multiple plans so you can choose the <br></br> perfect option depending on what you need 
        <br></br><br></br>
        Check out our three different options just for you
        </Card.Text>
        <Link to="/plans">
        <Button className={"cardButton"}>Subscribe</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>

    <div style={{justifyContent:"center",  display:"flex"}}>
    <Card className={"card3"}>
      <Card.Body>
        <br></br>
        <Card.Title className={"cardTittle"}>Your <b>Songs</b> </Card.Title>
        <Card.Text className={"cardContent"}>
          Check out, repeat, and control your favourite songs on <br></br> your unlimited music library
          <br></br><br></br>
          Listen to your favourite songs on all your devices<br></br> wherever you are. Download your songs to hear your music offline
        </Card.Text>
        <Link to="/albums">
        <Button className={"cardButton"}>My music</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    <div className='musicTittle' style={{paddingTop:"100px"}}>¿Why choose Blatzi?</div>
    <div className={"cardContent"}>Play millions of songs. Access our music app from all your devices.<br></br> Discover the basic and exclusive built-in features. Select and play any song without ads,<br></br> download your favorites and listen to them offline.</div>
    <div className='musicTittle' style={{paddingTop:"100px"}}>¿Internet is down? No problem</div>
    <div style={{justifyContent:"center",  display:"flex"}}>
      <img src={image1}  alt="Element" style={{width:"1200px"}} />
    </div>
    <div className={"cardContent"}>Download your music from your library to listen to your songs offline and save data.
 <br></br></div>
    </>
     );
}
 
export default CardContent;