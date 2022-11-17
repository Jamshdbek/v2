import React, { useEffect } from 'react'
import cls from "./main.module.scss"
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import i18next from 'i18next';
function Main() {
    // AOS.init();
    const { t , i18n } = useTranslation(["about"]);
    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en")
        }
    },[])
    const handleLanguageChange = (e) => { 
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div className={cls.main}>
         
            {/* <select 
                value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
            >
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
                <option value="ru">Russian</option>

</select> */}
            <div className={cls.body} >
                {/* {Hi, my name is  } */}
                <p className={cls.text_start}>{t('about:hello')}</p>
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