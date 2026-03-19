import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";

// Import images
import Sidebar from "../../img/bigentities project.png";
import Ecommerce from "../../img/fieldforce-project.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/desires-project.png";
import DoctorApp from "../../img/doctor.png";
import Taleem from "../../img/login.png";
import BigEntitiesFrontend from "../../img/bigEntities.png";

// Project data
const projects = [
  {
    title: "Doctor Appointment Booking System",
    desc: "A full MERN stack app where patients can book appointments, pay online or via cash, and doctors/admin can manage schedules.",
    img: DoctorApp,
    live: "https://doctor-appointment-booking-system-br6c.onrender.com", // frontend
    admin: "https://doctor-appointment-booking-system-admin-nw9a.onrender.com/", // admin panel
    github:
      "https://github.com/Mohsinkhan48/Doctor-Appointment-Booking-System-using-MERN-Stack",
  },
  {
    title: "Taleem-o-Tarbiya",
    desc: "A MERN stack final year project, similar to Udemy, designed for Islamic courses (Dars e Nizami). It has 3 roles: Student, Teacher, and Admin. Students can learn and earn certificates, Teachers manage courses, and Admin handles platform management.",
    img: Taleem,
    github: "https://github.com/Mohsinkhan48/Taleem-o-Tarbiya",
    live: "", // no live demo yet
  },
  {
    title: "Fieldforce Project",
    desc: "An enterprise-level project demonstrating CRUD operations and API integration. This project is related to pharmaceutical companies to track employees records.",
    img: Ecommerce,
    github: "",
    live: "https://www.fieldforce-ai.com/",
  },
  {
    title: "Tic-Tac-Toe Project",
    desc: "A React.js project with interactive UI, demonstrating state management and component design.",
    img: Sidebar,
    github: "https://github.com/Mohsinkhan48/Tic-Tac-Toe-Game-Reactjs",
    live: "",
  },
  {
    title: "BigEntities Frontend Website",
    desc: "A frontend project built using HTML, CSS, Bootstrap, and JavaScript. This project demonstrates responsive design and interactive features.",
    img: BigEntitiesFrontend,
    live: "https://www.bigentities.com/",
    github: "", // optional if frontend repo is not public
  },
];

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: darkMode ? "white" : "" }}
      >
        Recent Projects
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }} // pagination stays
        // Remove navigation prop
        modules={[Autoplay, Pagination]} // remove Navigation module
        className="portfolio-slider"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={proj.img} alt={proj.title} />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="project-links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn github"
                    >
                      GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn live"
                    >
                      Demo
                    </a>
                  )}
                  {proj.admin && (
                    <a
                      href={proj.admin}
                      target="_blank"
                      rel="noreferrer"
                      className="btn admin"
                    >
                      Admin
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
