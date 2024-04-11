// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <div className='h-[25vh] md:h-[35vh] lg:h-[65vh]'>
                <Swiper
                     modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
                     effect='fade'
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     pagination={{ clickable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/jjnsdbTY/brandon-griggs-w-R11-KBa-B86-U-unsplash.jpg" className="w-full brightness-90 rounded-xl h-[25vh] md:h-[35vh] lg:h-[65vh]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/nznwS40S/youssef-abdelwahab-qyzo7-TDSVQs-unsplash.jpg" className="w-full brightness-90 rounded-xl h-[25vh] md:h-[35vh] lg:h-[65vh]" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/dt1431bZ/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" className="w-full brightness-90 rounded-xl h-[25vh] md:h-[35vh] lg:h-[65vh]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/jqHS7t7s/alberto-castillo-q-mx4m-Sk-K9zeo-unsplash.jpg" className="w-full brightness-90 rounded-xl h-[25vh] md:h-[35vh] lg:h-[65vh]" />
                    </SwiperSlide>
                </Swiper>
            </div>
    );
};

export default Slider;