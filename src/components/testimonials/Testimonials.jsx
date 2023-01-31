import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptatum at a expedita molestias impedit neque saepe aspernatur ut ea odio pariatur sapiente temporibus ad nulla quaerat similique corporis error'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptatum at a expedita molestias impedit neque saepe aspernatur ut ea odio pariatur sapiente temporibus ad nulla quaerat similique corporis error'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptatum at a expedita molestias impedit neque saepe aspernatur ut ea odio pariatur sapiente temporibus ad nulla quaerat similique corporis error'
  },
  {
    avatar: AVTR4,
    name: 'Khera Kim',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptatum at a expedita molestias impedit neque saepe aspernatur ut ea odio pariatur sapiente temporibus ad nulla quaerat similique corporis error'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review form Clients</h5>
      <h2>Testmonials</h2>
      <Swiper className="container testmonials__container mySwiper"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index)=> {
            return(
              <SwiperSlide key={index} className='testmonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="avatar one" />
                </div>
                <h5>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          }
          )
        }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials