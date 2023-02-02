import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileCard from './ProfileCard';
import { Container, Card, Col, Button,Row } from "react-bootstrap";
import './index.css';
import ImagAlexa from './images/alexa.png';
import ImagCortana from './images/cortana.png';
import ImagSiri from './images/siri.png';


const root = ReactDOM.createRoot(document.getElementById('root'));


function App(){
  const columnsPerRow = 4
  return (
    
    <div className="text-center">
      <div className="title alert alert-primary">
        <h1>
          Personal Digital Assisants
        </h1>
      </div>
      <div className="container-flex">
      <div className="row justify-content-center">
        
        <ProfileCard title="Alexa" handle="@alexa99" Img = {ImagAlexa}/>
        <ProfileCard title="Cortana" handle="@cortana32" Img = {ImagCortana}/>
        <ProfileCard title="Siri" handle="@siri96" Img = {ImagSiri}/>
      
        
      </div>
      </div>
    
      </div> 
  );
}



root.render(<App/>);
