// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <div className='h-[30vh] md:h-[45vh] lg:h-[70vh] relative flex justify-center items-center'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                effect='fade'
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=' animate__animated animate__fadeInRight'
            >


                <SwiperSlide>
                    <img src="https://i.postimg.cc/jjnsdbTY/brandon-griggs-w-R11-KBa-B86-U-unsplash.jpg" className="w-full brightness-50 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/yYm44ZMM/ahmed-almakhzanji-b-XY9-i4-ESx-A-unsplash.jpg" className="w-full brightness-50 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/dt1431bZ/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" className="w-full brightness-50 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/jqHS7t7s/alberto-castillo-q-mx4m-Sk-K9zeo-unsplash.jpg" className="w-full brightness-50 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>

            </Swiper>
            <div className='animate__animated animate__fadeInLeft   absolute space-y-2 md:space-y-5 py-2 px-0 md:py-10 md:px-0 lg:py-20 bg-white bg-opacity-80 rounded-xl text-center w-[75%] z-20'>
                <h1 className=" text-xl md:text-4xl lg:text-5xl font-bold text-blue-600 ">Welcome to Urban Estates</h1>
                <p className=' text-sm md:text-[15px] lg:text-xl px-1 md:w-2/3 mx-auto'>Elevating Your Real Estate Journey with Premium Properties and Personalized Service.</p>
            </div>
        </div>
    );
};

export default Slider;