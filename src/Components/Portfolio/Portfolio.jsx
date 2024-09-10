import React from 'react'
import './Portfolio.css';
import{Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import Sidebar from "../../img/bigentities project.png";
import Ecommerce from "../../img/fieldforce-project.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/desires-project.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
    <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
    <span>Portfolio</span>

    <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >
          <a href="https://github.com/Mohsinkhan48/Tic-Tac-Toe-Game-Reactjs">
    <SwiperSlide>
    <img src={Sidebar} alt=''/>
    </SwiperSlide></a>
    <SwiperSlide>
    <img src={Ecommerce} alt=''/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={MusicApp} alt=''/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={HOC} alt=''/>
    </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Portfolio