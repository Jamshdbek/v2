import React from 'react'
import cls from "./education.module.scss"



function Education() {

  return (
    <div className={cls.body_education} >

      <h1>Some Things I've Built</h1>
      <div className={cls.container} 
        data-aos="fade-left"
       >
        <a href="https://github.com/UmarAdkham/behance/tree/master/server">
          <div className={cls.photo} data-aos="fade-left">
          </div>
        </a>
        <p className={cls.textured}>we made the backend of the famous website behance with the group, it has auth and phono uploads</p>
        <div className={cls._inform}>

          <p className={cls.info}>node js backend</p>
          <h2 className={cls.one_text}>Node project</h2>
          <p className={cls.snack}>Node.js Express.js MongoDB mongoose</p>
        </div>
      </div>
      {/* second work */}
      <div className={cls.work_two} data-aos="fade-right">
        <div className={cls.two_work_info}>

        <p className={cls.smile_text}>Featured Project</p>
        <p className={cls.two_text}>Spotify Main Page</p>
        <div className={cls.text_inform}>
            I tried to make this website spotfiy main page and use Rapid api to add track
        </div><br />
        <p className={cls.snack_info}>TypeScript React.js Redux Rapid API MUI</p>
        </div>
        <a href="">
          <div className={cls.img_two} data-aos="fade-right">

          </div>
       </a>
      </div>



    </div>
  )
}

export default Education