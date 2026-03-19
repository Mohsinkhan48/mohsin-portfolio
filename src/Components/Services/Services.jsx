import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../../img/Resume-Mohsin-Khan.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane style={{ display: "flex" }}>
          <ol>HTML5 & CSS3</ol>
          <ol>Tailwind CSS</ol>
          <ol>JavaScript (ES6+)</ol>
          <ol>Material UI</ol>
        </spane>
        <spane style={{ display: "flex" }}>
          <ol style={{ color: "#788097" }}>React.js & Redux</ol>
          <ol style={{ color: "#788097" }}>Node.js & Express</ol>
          <ol style={{ color: "#788097" }}>MongoDB & REST APIs</ol>
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend Development"}
            detail={
              "Building responsive UI and interactive web apps using React.js, Redux, Tailwind CSS, Bootstrap, and Material UI."
            }
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend Development"}
            detail={
              "Developing REST APIs and server-side logic using Node.js, Express, and integrating MongoDB for database management."
            }
          />
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Project Experience"}
            detail={
              "Worked on Taleem-o-Tarbiya, iCod.ai, and FieldForce Web App focusing on full-stack development, state management, and user experience."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
