import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';


class Main extends React.Component {
  render(){
  return (
      <div className="Main">
        <Headers/>
        <Article/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
