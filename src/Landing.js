import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import Nav from './Nav.js'
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
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
          <Nav offset={485}/>
          <div className='innerBannerChunk'>
            <div className='bannerChunkLeft'>
              <div className='flex-center title'>Quality Everything</div>
              <div className='flex-center'>The best glass</div>
              <div className='flex-center'>Eco friendly resin</div>
              <Link to={'/quality'} className='flex-center button'>Learn about our process</Link>
            </div>
            <div className='bannerChunkRight'>
              <div className='flex-center title'>Passion for exploration</div>
              <div className='flex-center'>From shapes to spots</div>
              <div className='flex-center'>The BT crew has tried them all</div>
              <Link to={'/explore'} className='flex-center button '>Come see</Link>
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
              <Link className='flex-center button' to={'/boards'}>Find Yours</Link>
            </div>
            <div className='bannerChunkRight'>
              <div className='flex-center title'>Make Appointment</div>
              <div className='flex-center'>Choosing the right board is tough</div>
              <Link className='flex-center button' to={'/talkshapes'}>Lets talk it through </Link>
            </div>
          </div>
          <ParallaxBanner
             className="your-class"
             layers={[{
              image: 'https://storage.googleapis.com/blacktuna/tuna-couch.jpg',
              amount: .4,
              slowerScrollRate: false,
              }]}
               style={{
                   height: '400px',
               }}
             >

          </ParallaxBanner>
        </div>

    );
  }
}

export default Landing;
