import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Framer Motion variants for left section
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Framer Motion variants for right circle logos
  const circleVariants = {
    hidden: { rotate: 45, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 3, type: "spring" },
    },
  };

  return (
    <div className="works" id="Works">
      {/* left side */}
      <motion.div
        className="w-left"
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            PROFESSIONAL EXPERIENCE
          </span>
          <span>Where I've Worked</span>
          <spane
            style={{
              display: "block",
              marginTop: "1rem",
              lineHeight: "1.8rem",
              color: darkMode ? "white" : "#555",
            }}
          >
            <b>Big Entities Company</b> <br />
            Junior Software Engineer | Nov 2024 – Aug 2025 <br />
            Worked as a MERN Stack Developer focusing on:
            <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
              <li>
                Developing full-stack applications using React.js, Redux,
                Node.js
                <br /> Express, and MongoDB.
              </li>
              <li>
                Building RESTful APIs and ensuring efficient database
                management.
              </li>
              <li>
                Implementing state management, authentication (JWT), and
                responsive <br /> UI with Tailwind CSS and Bootstrap.
              </li>
              <li>
                Maintaining code quality, debugging, and collaborating with team
                members to deliver scalable solutions.
              </li>
            </ul>
          </spane>

          <a href="https://www.linkedin.com/in/mohsin-khan999/" target="_blank">
            <button className="button s-button">Hire Me</button>
          </a>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </motion.div>

      {/* right side */}
      <motion.div
        className="w-right"
        variants={circleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </motion.div>
    </div>
  );
}

export default Works;
