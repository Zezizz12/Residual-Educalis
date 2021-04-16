import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink,Nav} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Button } from 'reactstrap';
import image from './logo.png';
import './Headers.css';


const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      
    <div className="Container">

        <div className="navbar">

          <img className="image" src={image}/>
      
        </div>

        <div className="Menu">

          <Navbar light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
             <Nav>
                <NavItem>
                 <NavLink className="MenuItens" href="/components/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="MenuItens" href="/components/">Quem Somos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="MenuItens" href="/components/">Estrutura</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="MenuItens" href="/components/">Contribua</NavLink>
                </NavItem>
              </Nav>
          </Collapse>

        </Navbar>

        
          <Button onClick={() => history.push('/Login')} className="Loginbutton" style={{backgroundColor: '#0098C7'}} active>Login</Button>
        

            </div>
        
    </div>
      
    );
  }
  
  export default Headers;