import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Con3Item from './Con3Item';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';

const Con3List = () => {
    const { aboutData } = useSelector((state) => state.aboutR);
    const currentData = aboutData[0].imgdata;
    console.log(currentData);
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            className='mybanner'
        >
            {/* 추가 */}
            {/* <Con3Item /> */}
            {currentData.map((item) => (
                <SwiperSlide key={item.id}>
                    <Con3Item item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Con3List;
