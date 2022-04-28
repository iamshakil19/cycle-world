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
                <img src="https://www.startech.com.bd/image/cache/catalog/offer-page/eid-22/eid-2022-deal-home-banner-982x500.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-nagad-free-home-delivery-combined-home-banner-982x500.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.startech.com.bd/image/cache/catalog/home/banner/ramadan-mega-deal-home-banner-35k-982x500.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.startech.com.bd/image/cache/catalog/home/banner/free-home-delivery-feb-home-banner-gazipur-982x500.jpg" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;