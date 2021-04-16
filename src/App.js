import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Main from './components/Main';
import Create from './components/Create';
import Recovery from './components/Recovery';
import Login from './components/Login';


class App extends React.Component {
  render(){
  return (
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" component={Main}/>
          <Route  path="/Create" component={Create}/>
          <Route  path="/Recovery" component={Recovery}/>
          <Route  path="/Login" component={Login}/>
          </Switch>
        
        </Router>
      
     
      </div>
    );
  }
}

export default App;
