import React, { Component } from 'react';
import pramod1 from '../components/Image/pramod1.jpg';


class About extends Component {
  render() {
    return (
      <div className='About'>

        <div className='About-content'>
          <div className='image'>
           
                  <img height='300px' width='200px' src={pramod1} alt='profile-img' />
                </div>
          <h1>I am Pramod Ray</h1>
          <p style={{fontWeight:'30px'}}><b>I am a Frontend Developer. I like dabbling in varrious parts and<br></br>
            Frontend development and like to learn
        about new technology<br></br>  write technical blogs or play games in free time.</b> </p>
          <div className="social-links1 margin-bottom-100">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/pramod-ray-2b7662192/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="https://github.com/Pramod0215/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Freecodecamp */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>

            {/* Youtube */}
            <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>

          </div>

        </div></div>
        )
      }
    }
    
    export default About;
