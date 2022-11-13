import React from 'react'
import Projects from './projects'
import cls from "./work.module.scss"
import {project} from './component' 
function Work() {
  return (
    <div className={cls.body_works}>
      <h1 className={cls.text_page}><span>03.</span>Works</h1>
      <div className={cls.container}>
        {
          project.map((value) => {
            return <Projects name={value.name} img={value.img} url={value.url} stack={value.stack} key={value.id} />
          })
   }
      </div>
    </div>
  )
}

export default Work