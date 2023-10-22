"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img9 from "../img/img9.png";
// import img10 from "../img/img10.jpg";
// import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";
import img16 from "../img/img16.jpg";
import img17 from "../img/img17.jpg";
import img18 from "../img/img18.jpg";
import img19 from "../img/img19.jpg";

const Slider = () => {
  return (
    <div className=" bg-slate-300 h-full p-7" id="projects">
      <h1 className="text-center text-5xl  font-bold py-20">Our Projects</h1>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={
            {
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
            }
        }
      >
        <SwiperSlide>
          <Image src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img9} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image src={img10} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Image src={img11} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <Image src={img12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img14} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img15} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img16} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img17} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img18} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img19} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
