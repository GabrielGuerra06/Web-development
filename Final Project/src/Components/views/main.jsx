import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../navBar';
import PageFooter from '../footer';
import CardContent from '../card';
import "../styles.css"

const Main = ()=> {
  return (
    <div className = "color-fondo" >
    <NavBar/>
    <CardContent/>
    <PageFooter/>
    </div>

  
  );
}

export default Main;