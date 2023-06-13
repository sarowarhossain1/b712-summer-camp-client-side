import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from '../../../assets/home/slider1.jpg'
import slider2 from '../../../assets/home/slider2.jpg'
import slider3 from '../../../assets/home/slider3.jpg'
import slider4 from '../../../assets/home/slider4.jpg'
import slider5 from '../../../assets/home/slider5.jpg'
import slider6 from '../../../assets/home/slider6.jpg'
import slider7 from '../../../assets/home/slider7.jpg'
import slider8 from '../../../assets/home/slider8.jpg'


const Category = () => {
    return (
        <section className="pt-12 mb-8">
            <SectionTitle
             subHeading={"Saturday-Sunday: 8:00am - 10:00am"}
             heading={"Dancing Your Time."}
            ></SectionTitle>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-screen-xl mx-auto"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} alt="" />
        </SwiperSlide>
       
      </Swiper>
        </section>
    );
};

export default Category;