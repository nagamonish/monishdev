import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1, 
    image: Image1, 
    title: "Rahul Solleti", 
    subtitle: "Junior at NCSSM", 
    comment: "I’ve had the pleasure of working with many fellow students, but Monish is someone who I will always remember fondly. I learned a lot from Monish. He's always willing to lend a hand to anyone who needs it. Watching him adapt to any given situation was an inspiration! His ability to overcome challenges truly stands out about him!",
  }, 

  {
    id: 1, 
    image: Image3, 
    title: "Mehdi Hussain", 
    subtitle: "Student | Developer | Entrepreneur", 
    comment: "While working with Monish, he exemplified his self-motivation and determination to always bring perfection to the table, no matter the project. I have never seen a person like Monish who can always bring new ideas to the table and come up with solutions by thinking out of the box. His experience with React JS and in Mobile development are very in depth and I have never enjoyed working with anyone more than Monish!"
  }


]

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper className="testimonials__container grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>

              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials