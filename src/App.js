
import './App.css';

import Footer from './components/Footer';
import Navi from './components/Navi';
import Nav2 from './components/Nav2';
import Content from './components/Content';
import Productcat from './components/Productcat';
import Latest from './components/Latest';
import Hr from './components/Hr';
import Grid from './components/Grid clothes';
import Category from './components/Category';
import Navmob from './components/Navmob';
function App() {
  return (
   <header className="  bg-white " >
  <div className="    " > 
  
 
  
  <Navi/>
  <Nav2/>
  <Navmob/>
  <Content/>
  <Productcat/>
  <Category/>
 
  <Latest/>
  <Hr/>
  <Grid/>
   <Grid/>
  <Footer/>
 
 
  
  </div> 

  
 
  
 
    
   </header>

 
 
 
 
 );

}

export default App;
