import { MainWrap, VisualWrap } from './style';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Content1, Content2, Content3 } from '../../components';

const Main = () => {
  return (
    <>
      <VisualWrap>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <img src="./images/visual1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/visual2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/visual3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/visual4.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </VisualWrap>
      <MainWrap>
        <Content1 />
        <Content2 />
        <Content3 />
      </MainWrap>
    </>
  );
};

export default Main;
