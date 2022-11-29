import React, {useState} from 'react';
import NavBar from '../../navBar';
import PageFooter from '../../footer';
import { Link,useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import "./plans.css"
import {BsCheck2} from 'react-icons/bs'

const Plans = () => {
  const navigate = useNavigate();
  return ( 
    <div className={"plans"} class="row">
      <div class="col-12">
        <NavBar/>
        <h1 className={"planTitle"}>PLANS</h1>

        <Card className={"cardPlan1"}>
          <Card.Body>
            <br></br>
            <Card.Title className={"cardTittle"}><b>BASIC</b> </Card.Title>
            <br></br>
            <Card.Text className={"cardContent"}>
              <div><BsCheck2 size={"40px"}/>Ads included</div>
              <div><BsCheck2 size={"40px"}/>Wifi required</div>
              <div><BsCheck2 size={"40px"}/>No downloads available</div>
              <div><BsCheck2 size={"40px"}/>No size limit</div>
              <div><BsCheck2 size={"40px"}/>Free access to our library</div>
              <div><BsCheck2 size={"40px"}/>Access to one account</div>
              <div className={"price"}>FREE</div>
              <div>$0.00</div>
            </Card.Text>
            <Link to="/pay" state={{price: "$0.00"}}>
              <Button className={"cardButton"}><b>GET STARTED</b></Button>
            </Link>
          </Card.Body>
        </Card>

        <Card className={"cardPlan2"}>
          <Card.Body>
            <br></br>
            <Card.Title className={"cardTittle"}><b>PREMIUM</b> </Card.Title>
            <Card.Text className={"cardContent"}>
              <br></br>
              <div><BsCheck2 size={"40px"}/>Ad-free music listening</div>
              <div><BsCheck2 size={"40px"}/>Play anywhere - even offline</div>
              <div><BsCheck2 size={"40px"}/>No downloads available</div>
              <div><BsCheck2 size={"40px"}/>No size limit</div>
              <div><BsCheck2 size={"40px"}/>Free access to our library</div>
              <div><BsCheck2 size={"40px"}/>Access to two accounts</div>
              <div className={"price"}>$ 49.99</div>
              <div>mxn / month</div>
            </Card.Text>
            <Link to="/pay" state={{price: "$49.99"}}>
              <Button className={"cardButton"}>GET STARTED</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card className={"cardPlan3"}>
          <Card.Body>
            <br></br>
            <Card.Title className={"cardTittle"}><b>Blatzi</b> </Card.Title>
            <Card.Text className={"cardContent"}>
              <br></br>
              <div><BsCheck2 size={"30px"}/>Ad-free music listening</div>
              <div><BsCheck2 size={"30px"}/>Play anywhere - even offline</div>
              <div><BsCheck2 size={"30px"}/>Downloads available</div>
              <div><BsCheck2 size={"30px"}/>No size limit</div>
              <div><BsCheck2 size={"30px"}/>Free access to our library</div>
              <div><BsCheck2 size={"30px"}/>Access to four accounts</div>
              <div><BsCheck2 size={"30px"}/>Personalized recommendations</div>
              <div><BsCheck2 size={"30px"}/>Edit and modify your  songs</div>
              <div className={"price"}>$ 99.99</div>
              <div>mxn / month</div>
            </Card.Text>
            <Link to="/pay" state={{price: "$99.99"}}>
              <Button className={"cardButton"}>GET STARTED</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <PageFooter class="col-12"/>
    </div>
  );
}
 
export default Plans;