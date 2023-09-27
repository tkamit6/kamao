import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import zomato from '../../images/Zomato-Logo.svg'
import swiggy from '../../images/Swiggy-App-Logo-.svg'
import paytm from '../../images/paytm-logo.svg'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SliderData = [
  { comment: "Kamaao work has vastly improved the quality of content on our platform & the user experience. Their turn around time has far surpassed our expectations and quality has been impeccable!", img: zomato },
  { comment: "Kamaao work has vastly improved the quality of content on our platform & the user experience. Their turn around time has far surpassed our expectations and quality has been impeccable!", img: swiggy },
  { comment: "Kamaao work has vastly improved the quality of content on our platform & the user experience. Their turn around time has far surpassed our expectations and quality has been impeccable!", img: paytm },
  { comment: "Kamaao work has vastly improved the quality of content on our platform & the user experience. Their turn around time has far surpassed our expectations and quality has been impeccable!", img: zomato },
  { comment: "Kamaao work has vastly improved the quality of content on our platform & the user experience. Their turn around time has far surpassed our expectations and quality has been impeccable!", img: swiggy },

]

const Section8 = () => {
  var settings = {
    infinite: true,
    speed: 500,
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
    <section className='container mx-auto md:py-16 max-w-7xl wrap '>
      <h1 className='text-center font-bold md:text-5xl text-2xl font-head mb-12 text-[#0D0E0E]'>What Our <span className='text-[#E78353]'> Client </span>Says? </h1>
      <div className="SwiperDiv md:px-[100px] px-8 h-[286px]">
        <Slider {...settings}>
          {
            SliderData.map((data, id) => (
              <div key={id} className="md:px-3 px-0">
                <div  className='bg-[#FFF5EF] rounded-2xl p-6'>
                  <p className='text-[#F1B598] md:text-4xl text-3xl pb-2 dm-sharrif'><BiSolidQuoteAltLeft /></p>
                  <p className='font-normal text-base text-[#3D3E3E] mb-6'>{data.comment}</p>
                  <img src={data.img} alt="img" loading='lazy' />
                </div>
              </div>
            ))
          }
        </Slider>
      </div>

    </section>
  )
}

export default Section8