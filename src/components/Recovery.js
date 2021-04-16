import React, { useState } from 'react';
import {Button,Input, Form  } from 'reactstrap';
import './Recovery.css';
import reco from './reco.png';
import image from './logo.png';

const Recovery = (props) =>{
  
  const [Value,SetValue] = React.useState('');
  const onChange = event => {

     localStorage.setItem("Email",event.target.value) ;
     SetValue(event.target.value);

  }
    return (
<div className="Container">
    <div className="create">
      <img className="img" src={reco}/>
    </div>

    <div className="right">

     
      
    
      <div>

        <img  src={image}/>
        <Form>

        <ul className="form">

        <li>  <Input className="input" placeholder="Email" value={Value} onChange={onChange}/> </li>
          
        <li>   <Button style={{color: "white"},{backgroundColor:"red"}} className="Button" >Enviar</Button>  </li>

        </ul>
          
        </Form>
      </div>

      
    </div>
   

</div>

    );

}

export default Recovery;