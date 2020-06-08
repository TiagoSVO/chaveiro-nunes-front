import React from 'react';
import './App.css';
import ButtonWhatsapp from '../buttonWhatsapp/ButtonWhatsapp';
import CNNavbar from '../navbar/Navbar';
import CNHero from '../hero/Hero';
import CNContact from '../contact/Contact';
import CNService from '../service/Service';
import CNAbout from '../about/About';
import CNFooter from '../footer/Footer';


function App() {  
  return (
    <React.Fragment>
      <ButtonWhatsapp />
      <CNNavbar />
      <CNHero />
      <CNContact />
      <CNService />
      <CNAbout />
      <CNFooter />
    </React.Fragment>
  );
}

export default App;
