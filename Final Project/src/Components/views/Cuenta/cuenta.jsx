import React from 'react';
import "./cuenta.css"
import logo from "../../../images/logo.png"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link, useLocation} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Cuenta = ()=> {
  const location =  useLocation();
  const location2 = useLocation();
  const location3 = useLocation();
  const {song2} = location2.state
  const {name} =  location.state;
  const {name3} = location3.state;
  const {image} = location.state
  const {image2} = location2.state
  const {image3} = location3.state
  return(
    <>
   <div className = "main">
    <div className = "center">
      <Link to={"/"}>
      <img src={logo} alt="Pasenme el logo que está roto" style={{width:"300px", color: 'aliceblue'}} />
      </Link>
    </div>
    <div className = "text">
      <div className = "left">
      <h1> Tu perfil, tu ritmo, tu onda</h1>
      <p> Accede a todos los detalles de tu cuenta </p>
      </div>

      <div className = "right">
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> Tus me gusta: {song2} </th>
            <td></td>
            <td></td>
            <td><img src={image2} style={{width:"150px" }}/><br/> <br/> <br/> </td>
          </tr>
          <tr>
            <th scope="row"> Albumes: {name} </th>
            <td></td> 
            <td></td>
            <td><img src={image} style={{width:"150px" }}/><br/> <br/> <br/> </td>
          </tr>
          <tr>
            <th scope="row"> Artistas: {name3} </th>
            <td></td>
            <td></td>
            <td><img src={image3} style={{width:"150px" }}/><br/> <br/> <br/> </td>
          </tr>
          <tr>
            <th scope="row"> Cuenta:</th>
            <td></td>
            <td>nombre</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"> Tipo de suscripcion:</th>
            <td></td>
            <td>premium/lite</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"> Tipo de cuenta:</th>
            <td></td>
            <td>usuario/artista</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"> Email:</th>
            <td></td>
            <td>email@mail.com</td>
            <td></td>
          </tr>
        </tbody>
        </table>
        {/*<Card style={{ width: '18rem' }}>
          <Card.Header class = "Ccolor">Featured</Card.Header>
            <ListGroup variant="flush">
              <div>
              <ListGroup.Item> Tus me gusta: #
                <Ruleta></Ruleta>
              </ListGroup.Item>
              </div>
              <div class = "spacing">
              <ListGroup.Item> Albumes: # 
                <Ruleta></Ruleta>
              </ListGroup.Item>
              </div>
              <div class = "spacing">
              <ListGroup.Item> Artistas: # 

              </ListGroup.Item>
              </div>
              <div class = "spacing">
              <ListGroup.Item> Cuenta: nombre</ListGroup.Item>
              </div>
              <div class = "spacing">
              <ListGroup.Item> Tipo de cuenta: premium/lite</ListGroup.Item>
              </div>
              <div class = "spacing">
              <ListGroup.Item> Cuenta: premium/lite</ListGroup.Item>
              </div>
            </ListGroup>
          </Card>*/}
      </div>
    </div>
    <div  className = "center left">
      <img className = "you" src="https://www.nicepng.com/png/detail/304-3043180_this-logo-for-conference-shows-the-silhouette-outlines.png" alt="mono" />
    </div>
    <div className= "center left">
      <div>
        <p className = "bink lefty"> Inserte nombre del usuario con Backend (a chambear)</p>
      </div>
    </div>
    <div className = "center left">
      <div className ="btnLeft">
        <Link  to={"/plans"}>
        <button className = "botonCuenta"> Mejora tu cuenta </button>
        </Link>
      </div>
    </div>
   </div>

   </>
  );
}

export default Cuenta;


