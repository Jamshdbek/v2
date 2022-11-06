import React from 'react'
import cls from "./main.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Main() {
    AOS.init();

    return (
        <div className={cls.main}>
         

            <div className={cls.body} >
                <p className={cls.text_start}>Hi, my name is </p>
                <h1 className={cls.text_big_start} data-aos="fade-up"
                   >Ibroximov Jamshid.</h1>
                <h2 className={cls.text_second_start} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" >I build things for the web.</h2>
                <p className={cls.smile_info} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">I'm software engineer   specializing in build amending website, <br /> Correctly I'm focusing on building accessible, and researching good job </p>
            </div>
            
        </div>
    )
}

export default Main