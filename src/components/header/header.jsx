import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { FaConnectdevelop } from "react-icons/fa";

import cls from "./header.module.scss"
function Header() {
  return (
    <div className={cls.header}>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <span className={cls.icon}>
          <a class="navbar-brand" href="#"><FaConnectdevelop /></a>
        </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" className={`${cls.button} ${'fas'}`}><FiAlignJustify className={cls.color} /></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={ cls.tab}></div>
          <div className={cls.header_nav}>

            <ul > 
              <li data-aos="fade-down">
                About</li>
              <li data-aos="fade-down">
                Education</li>
              <li data-aos="fade-down">
                Work</li>
              <li data-aos="fade-down">
                Contact</li>
          </ul>
          </div>
         
          <a class="tools_button_download" href="https://fv9-4.failiem.lv/down.php?i=q3j8w24km&amp;n=IbroximovJamshidResume.pdf" download >
            <button className={cls.resume}
              data-aos="fade-down"
            >Resume</button>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Header