import React, { useState } from 'react';
import {Button,Input,Form  } from 'reactstrap';
import './Create.css';
import conta from './conta.png';
import image from './logo.png';

const Create = (props) =>{
  const [Value,SetValue] = React.useState('');
  const onChange = event => {

     localStorage.setItem("Matricula",event.target.value) ;
     SetValue(event.target.value);

  }
    return (
<div className="Container">
    <div className="create">
      <img className="img" src={conta}/>
    </div>

    <div className="right">

     
      
    
      <div>

        <img  src={image}/>
        <Form>

        <ul className="form">
        <li>  <Input className="input" placeholder="Nome da Escola"/> </li>
        <li>  <Input className="input" placeholder="Matricula" value={Value} onChange={onChange}/> </li>
        <li>  <Input className="input" placeholder="Email"/> </li>
        <li>  <Input className="input" placeholder="Senha" /> </li>   
        <li>   <Button style={{color: "white"},{backgroundColor:"red"}} className="Button" >Criar Conta</Button>  </li>

        </ul>
        </Form>
          
      </div>

    </div>
   

</div>

    );

}

export default Create;