import React from 'react'
import cls from "./contact.module.scss"
function Contact() {
  return (

    <div className={cls.body_contact}>

      <h1>Get In Touch</h1>
      <div className={cls.contact_container}>

        <h3 className={cls.next}>What's Next ?</h3>
        <div className={cls.middle_text}>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</div>
        <br />
      
        <a href="mailto:jamshidbekd664@gmail.com">
        <button className={cls.say_hello}>Say Hello</button>
        </a>
      </div>
    </div>
  )
}

export default Contact