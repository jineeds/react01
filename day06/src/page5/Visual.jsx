import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const Visual = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src="./images/visual1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/visual2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/visual3.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/visual4.webp" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Visual;
