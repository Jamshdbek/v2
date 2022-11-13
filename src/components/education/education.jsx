import React from 'react'
import cls from "./education.module.scss"



function Education() {

  return (
    <div className={cls.body_education} >

      <h1>Some Things I’ve Built</h1>
      <div className={cls.container} 
        data-aos="fade-left"
       >
        <a href="https://github.com/UmarAdkham/behance/tree/master/server">
          <div className={cls.photo}>
          </div>
        </a>
          <p className={cls.snack}>Node.js Express.js MongoDB mongoose</p>
        <p className={cls.textured}>we made the backend of the famous website behance with the group, it has auth and phono uploads</p>
        <div className={cls._inform}>

          <h4 className={cls.info}>node js backend</h4>
          <h3>Node project</h3>
        </div>
      </div>



    </div>
  )
}

export default Education