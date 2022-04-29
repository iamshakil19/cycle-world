import React from 'react';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";
import { EffectFade, Navigation, Pagination } from "swiper";
import './Slider.css'



const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://www.durantabikes.com/media/bikes/large/804257.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.durantabikes.com/media/bikes/large/804479.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.durantabikes.com/media/bikes/large/804494.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.durantabikes.com/media/bikes/large/85480.jpg" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;