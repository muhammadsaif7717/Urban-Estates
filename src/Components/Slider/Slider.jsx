const Slider = () => {
    return (
        <div>
            <div className="carousel rounded-xl h-[250px] md:h-[350px] lg:h-[500px] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/jjnsdbTY/brandon-griggs-w-R11-KBa-B86-U-unsplash.jpg" className="w-full brightness-90" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/nznwS40S/youssef-abdelwahab-qyzo7-TDSVQs-unsplash.jpg" className="w-full brightness-90" />
                
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/dt1431bZ/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" className="w-full brightness-90" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/jqHS7t7s/alberto-castillo-q-mx4m-Sk-K9zeo-unsplash.jpg" className="w-full brightness-90" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;