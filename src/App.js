import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { StickyContainer } from 'react-sticky';
import Landing from './Landing.js'
import Boards from './Boards.js'
import About from './About.js'
import Footer from './Footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
       <StickyContainer>
          <BrowserRouter>
            <div>
               <Route exact path="/" component={Landing}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/boards" component={Boards}/>
               <Route exact path="/explore" component={Boards}/>
               <Route exact path="/quality" component={Boards}/>
               <Route exact path="/contact" component={Boards}/>
               <Footer />
             </div>
          </BrowserRouter>
        </StickyContainer>

    );
  }
}

export default App;
