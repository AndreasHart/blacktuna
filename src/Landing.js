import React, { Component } from 'react';
import { ParallaxBanner , ParallaxProvider} from 'react-scroll-parallax';
import Nav from './Nav.js'
import './Landing.css';

class Landing extends Component {
  render() {
    return (
       <ParallaxProvider>
        <ParallaxBanner
             className="your-class"
             layers={[
                 {
                     image: 'https://storage.googleapis.com/blacktuna/dopewavebanner.jpg',
                     amount: .3,
                     slowerScrollRate: false,
                 }
             ]}
             style={{
                 height: '500px',
             }}
           >
          </ParallaxBanner>
          <Nav />
          <div className='innerBannerChunk'>
            <div className='bannerChunkLeft'>
              <div className='flex-center title'>Quality Everything</div>
              <div className='flex-center'>The best glass</div>
              <div className='flex-center'>Eco friendly resin</div>
              <div className='flex-center button'>Learn about our process</div>
            </div>
            <div className='bannerChunkRight'>
              <div className='flex-center title'>Passion for exploration</div>
              <div className='flex-center'>From shapes to spots</div>
              <div className='flex-center'>The BT crew has tried them all</div>
              <div className='flex-center button '>Come see</div>
            </div>
          </div>
          <ParallaxBanner
             className="your-class"
             layers={[
                 {
                     image: 'https://storage.googleapis.com/blacktuna/woodybanner.jpg',
                     amount: .2,
                     slowerScrollRate: false,
                 }
             ]}
             style={{
                 height: '500px',
             }}
           >
          </ParallaxBanner>
          <div className="innerBannerChunk">
           <div className='bannerChunkLeft'>
              <div className='flex-center title'>See Boards</div>
              <div className='flex-center'>We like them in all shapes and sizes</div>
              <div className='flex-center button'>Find Yours</div>
            </div>
            <div className='bannerChunkRight'>
              <div className='flex-center title'>Make Appointment</div>
              <div className='flex-center'>Choosing the right board is tough</div>
              <div className='flex-center button'>Lets talk it through </div>
            </div>
          </div>
      </ParallaxProvider>

    );
  }
}

export default Landing;
