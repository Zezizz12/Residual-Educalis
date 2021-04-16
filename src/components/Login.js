import React, { useState } from 'react';
import {Button,Input,Form  } from 'reactstrap';
import './login.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Create from './Create';
import Recovery from './Recovery';
import create from './create.png';
import image from './logo.png';

const Login = (props) =>{
  const [Value,SetValue] = React.useState('');
  const onChange = event => {

     localStorage.setItem("Matricula",event.target.value) ;
     SetValue(event.target.value);

  }
    return (
<div className="Container">
    <div className="create">
      <img className="img" src={create}/>
    </div>

    <div className="right">

     
      
    
      <div>

        <img  src={image}/>
        <Form>
        <ul className="form">
        <li>  <Input className="input" placeholder="Matricula" value={Value} onChange={onChange}/> </li>
        <li>  <Input className="input" placeholder="Senha" /> </li>   
        <li>   <Button style={{color: "white"},{backgroundColor:"red"}} className="Button" >Entrar</Button>  </li>
        </ul>
        </Form>

        
          
      </div>

      <div >
       
          
        <ul className="itens">
        <li><Link to="/Create">Criar Conta </Link></li>
        <li><Link to="/Recovery"> Esqueceu Senha</Link></li>
        </ul>

        <Switch>
          <Route  path="/Create" component={Create}/>
          <Route  path="/Recovery" component={Recovery}/>
          </Switch>
      

      </div>
    </div>
   

</div>

    );

}

export default Login;