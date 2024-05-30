import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
function Works() {
  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className="works" id="Works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          <b>I did work related to:</b>
          
            <br /> <br />
           <b> 1). BigEntities Website</b>
            <br />
             Technologies: HTML, CSS, Bootstrap, JavaScript
            <br />
            <b>Project Description</b> <br />
            Developed and maintained the company’s main website, <br /> ensuring a responsive and user-friendly interface. Implemented <br /> modern design principles to enhance user engagement and optimize loading speeds.
          </spane>
          <span>
            <br /> <br />
           <b style={{color: "#788097"}}> 2). FieldForce Website(Reactjs, Bootsrtap)</b> <br />

           <b style={{color: "#788097"}}> 3). FieldForce Dashboard(Reactjs, MAterial UI, RESTful APIs)</b>
          </span>
          
            <button className="button s-button">Hire Me</button>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
