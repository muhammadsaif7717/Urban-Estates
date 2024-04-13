// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <div className='h-[25vh] md:h-[35vh] lg:h-[60vh] relative flex justify-center items-center'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                effect='fade'
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='z-10'
            >


                <SwiperSlide>
                    <img src="https://i.postimg.cc/jjnsdbTY/brandon-griggs-w-R11-KBa-B86-U-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[25vh] md:h-[35vh] lg:h-[60vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/nznwS40S/youssef-abdelwahab-qyzo7-TDSVQs-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[25vh] md:h-[35vh] lg:h-[60vh]" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/dt1431bZ/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[25vh] md:h-[35vh] lg:h-[60vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/jqHS7t7s/alberto-castillo-q-mx4m-Sk-K9zeo-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[25vh] md:h-[35vh] lg:h-[60vh]" />
                </SwiperSlide>

            </Swiper>
            <div className='z-20 absolute space-y-5 py-5 px-0 md:py-10
            md:px-3 lg:p-10  bg-white bg-opacity-50 rounded-xl text-center'>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#4f56bb] ">Welcome to Urban Estates</h1>
                <p className='text-sm lg:text-lg'>Elevating Your Real Estate Journey with Premium Properties and Personalized Service.</p>
            </div>
        </div>
    );
};

export default Slider;