import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { StickyContainer } from 'react-sticky';
import { ParallaxProvider } from 'react-scroll-parallax';
import Landing from './Landing.js'
import Boards from './Boards.js'
import Quality from './Quality.js'
import About from './About.js'
import Explore from './Explore.js'
import Footer from './Footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
       <StickyContainer>
          <ParallaxProvider>
            <BrowserRouter>
              <div>
                 <Route exact path="/" component={Landing}/>
                 <Route exact path="/about" component={About}/>
                 <Route exact path="/boards" component={Boards}/>
                 <Route exact path="/explore" component={Explore}/>
                 <Route exact path="/quality" component={Quality}/>
                 <Route exact path="/contact" component={Boards}/>
                 <Footer />
               </div>
            </BrowserRouter>
          </ParallaxProvider>
        </StickyContainer>

    );
  }
}

export default App;
