import React from 'react'
import { useNavigate } from 'react-router-dom'
import cls from "./work.module.scss"
function Projects(props) {
  // const navigate = useNavigate()
  const getUrl = () => {
    // navigate("mailto")
  }
  return (
    < div data-aos="flip-up" >
      <a href={`${props.url}`} >

      <div key={props.id} className={cls.card} onClick={() => getUrl} >
        <img src={props.img} alt="404" />

        <h2 className={cls.name}>{props.name}</h2>
        <a href="sd">

          {/* <span className='fab'>&#xf09b;</span> */}
        </a>
        <p className={cls.stack}>{props.stack}</p>
      </div>
      </a>
    </div>
  )
}

export default Projects