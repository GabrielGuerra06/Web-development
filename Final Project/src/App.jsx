import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/navBar';
import './Components/log.css';
import Login from './Components/views/Login/Login';
import PageFooter from './Components/footer';
import CardContent from './Components/card';
import Cuenta from './Components/views/Cuenta/cuenta';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './Components/views/main';
import Music from './Components/views/Music/music';
import Artists from './Components/views/Music/artists';
import Albums from './Components/views/Music/albums';
import Song from './Components/views/Music/songs';
import Plans from './Components/views/Plans/plans';
import Pay from './Components/views/pay';
import Welcome from './Components/views/Login/Welcome';

function App() {
  return (
    <Router>
    <div className='body' >
    <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route  path="/cuenta" element={<Cuenta/>} />
        <Route  path="/login" element={<Login/>} />
        <Route path='/Welcome' element={<Welcome/>} />
        <Route  path="/music" element={<Music/>} />
        <Route path="/albums" element={<Albums/>}/>
        <Route path="/artist" element={<Artists/>}/>
        <Route path="/song" element={<Song/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/pay" element={<Pay/>}/>
      </Routes>
      

    {/* <CardContent/>
    <PageFooter/> */}
    </div>
    </Router>
  
  );
}

export default App;
