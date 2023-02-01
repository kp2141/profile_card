import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileCard from './ProfileCard';
import { Container, Card, Col, Button,Row } from "react-bootstrap";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


function App(){
  const columnsPerRow = 4
  return (
    
    <div>
      <div class="title">
        <h1>
          Personal Digital Assisants
        </h1>
      </div>
     
      <div className="row">
        <ProfileCard title="Alexa" handle="@alexa99"/>
        <ProfileCard title="Cortana" handle="@cortana32"/>
        <ProfileCard title="Siri" handle="@siri96"/>
      </div>
      </div> 
  );
}



root.render(<App/>);
