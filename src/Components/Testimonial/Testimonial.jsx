import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "this guy is really a pro in his work and knows exactly what he is doing and what the client is asking for. this was my 2nd order with him and for sure will be continuing this work relation in the longer run.",
    },
    {
      img: profilePic2,
      review:
        "It was a great experience working with Mohsin khan. He was able to figure out my issues and correct them quickly. He would always go the extra mile and give me screenshots and detailed explanations on things he wanted me to understand or to do. I am blown away by how helpful and courteous he was the entire time he was helping me.",
    },
    {
      img: profilePic3,
      review:
        "perfect communication, very responsive, down to wht i ve requested for all the work i need, love the delivery outcomes, would definitely work with him long term for all other projects. ;)",
    },
    {
      img: profilePic4,
      review:
        "Mohsin works very hard and makes sure you are 100% satisfied. I would definitely recommend again and look forward to our next project",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
