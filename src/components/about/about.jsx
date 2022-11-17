import React from 'react'
import cls from "./about.module.scss"
import my_photo from "./img/v2.jpg"
function About() {
  return (
    <div className={cls.body_about} data-aos="fade-up">
      <h1 className={cls.text_page}><span>01.</span> About Me</h1>
      <div className={cls.container_text}>
        <div className={cls.text}>
          <h2 className={cls.text_info}>
            Hello! My name is Jamshid and I enjoy create new website <br />
            my interest web development started back in 2020 <br />
            when I decided to try editing custom Tumblr themes — turns out hacking together a custom  button taught me a lot about HTML & CSS!
           
            <br />
            <br />
            Here are a few technologies I've been working with recently:

            <table id="myTable">
              <tr>
                <td>JavaScript(ES6+)</td>
                <td>TypeScript</td>
               

              </tr>
              <tr>
                <td>React.js</td>
                <td>Node.js</td>
               

              </tr>
            </table>
          </h2>
        </div>
        <div className={cls.profile_img}>
          <div className={cls.over}></div>
          <div className={cls.myphoto}></div>
          <div className={cls.back}></div>
        </div>
      </div>
     
    </div>
  )
}

export default About