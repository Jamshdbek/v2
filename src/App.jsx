import React, { useEffect } from 'react'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

import { Route, Routes } from 'react-router-dom'
import { About, Contact, Education, Header, Main, Work } from './components'
import "./style/style.scss"
import alanBtn from '@alan-ai/alan-sdk-web';
function App() {

  useEffect(() => {
    alanBtn({
      key: 'ded108ede5da2e2848cb0c8334d154212e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'start test') {
          // Call the client code that will react to the received command
          alert('start')
        }
      }
    });
  }, []);


  return (
    <div >
    


      <Header />
      <div className="left_info" data-aos="fade-up"
        data-aos-duration="3000">
        <li>
          <a href="https://github.com/Jamshdbek">

            <span className='fab'><FiGithub/></span>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /> */}
          </ a>
        </li>
        <li>
          <a href="https://www.instagram.com/jamshid_imbrokhimov/">
            <span className='fab'><FiInstagram /></span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jamshidbek-ibroximov-015135243/"> </a>
          <span className='fab'><FiLinkedin /></span>
        </li>
        <li>
          <a href="https://web.telegram.org/k/">

            <span className='fab'><FaTelegram /></span>
          </a>
        </li>
        <li className='line'></li>

      </div>
      <div className="right_info" data-aos="fade-up"
        data-aos-duration="3000">
        <li className='email'>
          jamshidbek.ibroximov@gmail.com
        </li>
        <li className='line'></li>

      </div>
      <Main />
      <About />
      <Education />
      <Work />
      <Contact/>
    </div>
  )
}

export default App