import React from "react";
import { Swiper, SwiperSlide,  } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "../Section/SectionHome.css"
SwiperCore.use([Navigation, Pagination]);

const SectionHome = () => {

  const swiperStyle = {
    position: "relative",
    width: "100%",
    height: "550px",
    background: '#e2e2e2',
  };

    return (
      <div className="SectionHome">
            	<Swiper style={swiperStyle}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
      >
          <SwiperSlide className="SwiperSlide-img-01">Slide 1</SwiperSlide>
          <SwiperSlide className="SwiperSlide-img-02">Slide 2</SwiperSlide>
          <SwiperSlide className="SwiperSlide-img-03">Slide 3</SwiperSlide>
      </Swiper>
    
      </div>
    )
}

export default SectionHome;