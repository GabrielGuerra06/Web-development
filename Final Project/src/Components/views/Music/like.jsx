import React, { useState, createContext} from 'react';
import {BsHeart, BsHeartFill} from "react-icons/bs"
import { BsFillCartFill} from "react-icons/bs"
import {Button} from 'react-bootstrap'
import {Link, useNavigate } from 'react-router-dom';
import YourSongs from './yourSongs';

export const MusicContext = createContext()

const Like = (props) => {
  const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [like, setLike] = useState([]);
    const [itemIndex, setItemIndex] = useState(0);
    const [albumsLiked, setAlbumsLiked] = useState([])
    const [counter, setCounter] = useState(0)
   
    const toggler = () => {
        toggle ? setToggle(false): setToggle(true)
        itemIndex == 0 ? MusicLiked() : MusicDisliked(props.name)
        setAlbumsLiked([...albumsLiked, `  ${itemIndex}`]);
       console.log(like)
    }

    const add = () => { 
        return(        
<BsHeartFill color='red' size={"30px"} style={{float:"right"}}/>


        )
    }

    const Delete = () => {
return(
    <BsHeart color='red' size={"30px"} style={{float:"right"}}/>
)
    }
   
 const MusicLiked = () => {
  const name=props.name
  like.push({name})
    setItemIndex(itemIndex+1)
 }

  

 const MusicDisliked = () => {
  like.splice(0,1)
  setLike(like)
  setItemIndex(itemIndex-1)
 }

    return ( 
        <>
  <Button onClick={()=>{toggler()}} style={{backgroundColor:"black", borderStyle:"solid", borderColor:"black"}}>
        {toggle ? add()  : Delete() }
        </Button>

  <Link to="/cuenta" state={{name: props.name, image: props.image}}>
 <Button>My songs</Button>
 </Link>

        </>
        
     );
}
 
export default Like;
