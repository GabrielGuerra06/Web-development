import React from "react"
import image from "../images/logo.png"
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
import { Link } from "react-router-dom"
const PageFooter =()=> {
    return(
        <div class="container">
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
              <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
           <img src={image} alt="Logo" style={{width:"300px"}} />
              </a>
      
            </div>
      
            <div class="col mb-3">
            </div>
            <div class="col mb-3">

              <Link to={"/plans"}>
              <h5 className={"fContent"}>Subscribe</h5>
              </Link>

            </div>
        
            <div class="col mb-3">
              <h5 className={"fContent"} style={{marginBottom:"30px"}}>Redes Sociales</h5>
              <div><BsInstagram color="white" size={"30px"} className={"socials"} /></div>
              <div><BsFacebook color="white" size={"30px"} className={"socials"} /></div>
              <div><BsTwitter color="white" size={"30px"} className={"socials"} /></div>
            </div>
        
            

            
          </footer>
          
          </div>
          
      )
}

export default PageFooter;