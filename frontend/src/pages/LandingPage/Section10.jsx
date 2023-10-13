import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import stars from '../../images/landingPage/stars.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from '../../images/landingPage/testimonial1.png'
import testimonial2 from '../../images/landingPage/testimonial2.png'
import testimonial3 from '../../images/landingPage/testimonial3.png'

const SliderData = [
    { comment: "Kamaao work has vastly improved the quality of content on our platform & the user experience. Their turn around time has far surpassed our expectations and quality has been impeccable!", testimonialImg:testimonial1, img: stars },
    { comment: "Worked with Kamaao for few campaigns. Loved the team’s passion and focus to deliver on time and as per our expectations. Would strongly recommend Kamaao. Well done!!!", testimonialImg:testimonial2, img: stars },
    { comment: "If you want real marketing that works and effective implementation - mobile app's got you covered.If you want real marketing that works and effective", testimonialImg:testimonial3, img: stars},
    { comment: "Kamaao work has vastly improved the quality of content on our platform & the user experience. Their turn around time has far surpassed our expectations and quality has been impeccable!", testimonialImg:testimonial1, img: stars},
    { comment: "Worked with Kamaao for few campaigns. Loved the team’s passion and focus to deliver on time and as per our expectations. Would strongly recommend Kamaao. Well done!!!", testimonialImg:testimonial2, img: stars },
    { comment: "If you want real marketing that works and effective implementation - mobile app's got you covered.If you want real marketing that works and effective", testimonialImg:testimonial3, img: stars },
]

const Section10 = () => {
    var settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='container mx-auto md:py-16 md:mb-24 max-w-7xl wrap '>
            <h1 className='text-center font-bold md:text-5xl text-[28px] font-head mb-12 text-[#3D3E3E]'>What Are <span className='text-[#E78353] font-head'> People Saying </span>About Us </h1>
            <div className="SwiperDiv md:px-[100px] px-8 md:h-[286px]">
                <Slider {...settings}>
                    {
                        SliderData.map((data, id) => (
                            <div key={id} className="md:px-5 mt-10 px-0 comment-div">
                                <div className='img-box'>
                                    <img src={data.testimonialImg} alt="img" loading='lazy' style={{height:'64px'}} />
                                </div>
                                <div className='bg-[#FFF5EF] rounded-2xl pt-10 p-6'>
                                    <p className='text-[#3D3E3E] md:text-lg text-base font-bold'>Stephen Brekke</p>
                                    <p className='text-[#7C7C7C] md:text-base text-sm pb-3 font-medium'>7 day ago</p>
                                    <p className='font-normal text-base text-[#3D3E3E] mb-6'>{data.comment}</p>
                                    <div className='flex gap-1'>
                                    <img src={data?.img} alt="img" />
                                    <img src={data?.img} alt="img" />
                                    <img src={data?.img} alt="img" />
                                    <img src={data?.img} alt="img" />
                                    <img src={data?.img} alt="img" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </section>
    )
}

export default Section10