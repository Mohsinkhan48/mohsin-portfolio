import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

function Intro() {

  const transition ={duration:2, type: 'string'}

  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className='intro'>
    <div className='i-left'>
    <div className='i-name'>
    <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
    <span>Mohsin Khan</span>
    <span>Motivated and detail-oriented computer science student with two years of experience in React.js development, seeking a position as 
a React.js developer. Eager to apply academic knowledge and hands-on project experience to real-world applications, leveraging 
skills in React and REST frameworks.
{/* Experienced React.js developer with a strong understanding of state management and modern front-end tools. Committed to delivering high-quality code and staying up-to-date with the latest trends. And proficient in UI frameworks like Bootstrap and Tailwind CSS for crafting modern web experiences. */}

{/* I currently work at BigEntities Company, where I play a key role in developing the company's online presence through website development. */}

 </span>
    </div>
    <a href="https://www.linkedin.com/in/mohsin-khan999/" target='_blank'><button className='button i-button' >Hire me</button></a>
    

    <div className='i-icons'>
    {/* <img src={Github} alt=''/> */}
    <a href="https://www.linkedin.com/in/mohsin-khan999/" target="_blank"><img src={LinkedIn} alt=''/></a>
   <a href="#"> <img src={Instagram} alt=''/></a>
    </div>
    </div>
    <div className='i-right'>
    <img src={Vector1} alt=''/>
    <img src={Vector2} alt=''/>
    <img src={boy} alt=''/>
    <motion.img
    initial={{left:'-36%'}}
    whileInView={{left: '-24%'}}
    transition={transition}
     src={glassesimoji} alt=''/>
    <motion.div
    initial={{top:'-4%', left:'74%'}}
    whileInView={{left: '68%'}}
    transition={transition}
     style={{top: '-4%', left: '68%'}}
     className='floating-div'
     >
    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
    
    
    </motion.div>
    <motion.div
    initial={{left:'9rem', top:'18rem'}}
    whileInView={{left: '0rem'}}
    transition={transition}
     style={{top: '18rem', left: '0rem'}}
     className='floating-div'
     >
    <FloatingDiv image={thumbup} txt1='Best Design ' txt2='Award'/>
    </motion.div>

    <div className='blur' style={{background:"rgb(238 210 255)"}}>
    
    </div>
    <div className='blur' style={{
        top: '17rem',
        width: '17rem',
        height: '11rem',
        left: '-9rem'
    }}>
    
    </div>
    </div>
    </div>
  )
}

export default Intro