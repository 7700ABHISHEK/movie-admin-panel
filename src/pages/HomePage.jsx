import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const movieDetails = [
    {
        name: "Inside Women",
        img: "/front-page/slide-1.jpg",
        dsc: "Based on Edgar Allan Poe's classic bone-chilling tale, this bloody story will have you sleeping with the lights on for years to come. Nine year-old orphan Beth Harmon is quiet, sullen, and by all appearances unremarkable."
    },
    {
        name: "Soviet : The Cold War",
        img: "/front-page/slide-2.jpg",
        dsc: "Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the age of sixteen, she's competing for the U.S."
    },
    {
        name: "Future Hell",
        img: "/front-page/slide-3.jpg",
        dsc: "That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town's twisted secrets."
    },
];

const HomePage = ({ isLogin }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(isLogin === true){
            navigate("/dashboard");
        } else{
            navigate("/login")
        }
    }

    return (
        <div className="text-white relative">
            {/* Swiper Section */}
            <Swiper
                loop={true}
                effect="fade"
                autoplay={{ delay: 6000 }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                modules={[Navigation, EffectFade, Autoplay]}
                className="mySwiper"
            >
                {movieDetails.map((details, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="h-screen bg-no-repeat bg-cover bg-center"
                            style={{ backgroundImage: `url(${details.img})` }}
                        >
                            <div className="container mx-auto h-full flex justify-start items-center px-4 sm:px-6 md:px-10">
                                <div className="max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
                                    <h6 className='text-[#FFFFFF99] font-bold border-s-2 border-red-600 ps-1 text-xs sm:text-sm my-2 sm:my-4'>NEW RELEASES</h6>
                                    <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>{details.name}</h1>

                                    <div className="features mt-3 flex flex-wrap items-center gap-y-3 sm:gap-x-5 text-xs sm:text-sm">
                                        <div className="rate relative flex items-center">
                                            <svg className="circle-chart rotate-[270deg]" viewBox="0 0 30 30" width="30" height="30" fill="transparent">
                                                <circle className="circle-chart__background" stroke="#eee" strokeWidth="2" fill="none" cx="15" cy="15" r="14" />
                                                <circle className="circle-chart__circle" stroke="#4eb04b" strokeWidth="2" strokeDasharray="40,100" cx="15" cy="15" r="14" />
                                            </svg>
                                            <b className='absolute top-[6px] left-[7px] text-[10px]'>4.8</b>
                                            <img src="/rate/IMDB_Logo.png" alt="imdb" className='w-12 sm:w-16 mx-2 sm:mx-3' />
                                        </div>
                                        <div className="other-details flex gap-2 sm:gap-4 flex-wrap items-center">
                                            <span className='font-bold'>2019</span>
                                            <span className='bg-black text-white font-bold px-1 text-xs sm:text-sm'>4K <b className='bg-white text-black px-1'>Ultra HD</b></span>
                                            <span className='text-xs font-semibold'>1 hr 33 min</span>
                                            <span className='border rounded-full font-extrabold px-2 text-xs'>CC</span>
                                        </div>
                                    </div>

                                    <div className="dsc my-4 sm:my-5">
                                        <p className='text-sm sm:text-base md:w-[90%] lg:w-[70%] xl:w-[60%]'>{details.dsc}</p>
                                    </div>

                                    <div className="button mt-2 flex gap-5">
                                        <button
                                            className='py-2 sm:py-3 px-6 sm:px-8 bg-red-600 rounded-xl text-sm sm:text-base hover:bg-red-800 transition'
                                            onClick={handleClick}
                                        >
                                            Discover Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute top-1/2 left-4 z-20 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full transition">
                &#8592;
            </button>
            <button className="custom-next absolute top-1/2 right-4 z-20 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full transition">
                &#8594;
            </button>
        </div>
    );
};

export default HomePage;
