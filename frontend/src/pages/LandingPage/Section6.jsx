import { useRef, useEffect } from "react";
import hand from '../../images/landingPage/hand.svg';
import id from '../../images/landingPage/id.svg';
import creditCard from '../../images/landingPage/creditCard.svg';
import dopening from '../../images/landingPage/d-ac-opening.svg';
import homeLoan from '../../images/landingPage/homeLoan.svg';
import saving from '../../images/landingPage/saving.svg';
import qr from '../../images/landingPage/qr.svg';
import surveyfrom from '../../images/landingPage/survey.svg';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useTransform, useScroll } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Autoplay, FreeMode, Grid, Pagination } from 'swiper/modules';

const EarningOpportunityData = [
    { img: hand, name: "Merchant  Onboarding", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", bgColor: "#F7F1FF", borderColor: "#E0CCFB" },

    { img: id, name: "KYC Approval", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#ACE5DA", bgColor: "#E5FFFA" },

    { img: creditCard, name: "Credit Card Seller", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#F2BDDF", bgColor: "#FFE4F5" },

    {
        img: dopening, name: "Demat Account Opening", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li>
            <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/",
        borderColor: "#BBE0EE", bgColor: "#D4F3FF"
    },

    { img: homeLoan, name: "Home Loan", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#FFBDBD", bgColor: "#FFEFEF" },

    { img: saving, name: "Savings Account", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#F9E88C", bgColor: "#FFFBE5" },

    { img: qr, name: "QR Installation", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#FBD3BF", bgColor: "#FFECE3" },

    { img: surveyfrom, name: "Surveys & Audits", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#ACE5DA", bgColor: "#E5FFFA" },

    { img: homeLoan, name: "Merchant  Onboarding", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#FFBDBD", bgColor: "#FFEFEF" },

    { img: saving, name: "Merchant  Onboarding", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#F9E88C", bgColor: "#FFFBE5" },

    { img: qr, name: "Merchant  Onboarding", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#FBD3BF", bgColor: "#FFECE3" },

    { img: surveyfrom, name: "Merchant  Onboarding", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", borderColor: "#ACE5DA", bgColor: "#E5FFFA" },
]
const Section6 = () => {
    const sliderRef = useRef();
    const MobilesliderRef = useRef();



    return (
        <section className='container mx-auto md:py-12 max-w-7xl'>
            <h2 className='text-[#3D3E3E] md:text-[2.6rem] text-[1.75rem] mx-auto md:w-[100%] w-[87%] font-bold font-head text-center mb-6 md:-mb-6'>Other<span className='text-[#E78353] font-head'> Gigs Based Earnings </span>Opportunity</h2>


            <HorizontalScrollCarousel />


            {/* <Swiper
                speed={8000}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 0,
                    },
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                onSwiper={it => (sliderRef.current = it)}
                grid={{
                    rows: 2,
                }}
                loop={true}
                freeMode={true}
                modules={[Grid, Pagination, Autoplay, FreeMode]}
                className="earningOppurtunity hidden md:block"
            >
                {
                    EarningOpportunityData.map((link, id) => (
                        <SwiperSlide key={id}>
                            <div key={id} className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: `${link.bgColor}`, border: `4px solid ${link.borderColor}` }} >
                                <div className='mb-3'>
                                    <img src={link.img} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                                </div>
                                <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>{link.name}</h6>
                                <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                    {link.prara}
                                </div>
                                <hr />
                                <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>{link.opening}<span className='font-bold md:text-base text-xs text-[#33A3CF]'> {link.vancant}</span></p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}
            {/* <HorizontalScrollCarousel /> */}

            {/* mobile */}
            <Swiper
                slidesPerView={1.1}
                spaceBetween={0}
                freeMode={true}
                speed={8000}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                onSwiper={it => (MobilesliderRef.current = it)}
                pagination={{
                    clickable: true,
                }}
                grid={{
                    rows: 2,
                }}
                modules={[Grid, FreeMode, Autoplay]}
                className="activityHiring md:hidden block me-6"
            >
                {
                    EarningOpportunityData.map((link, id) => (
                        <SwiperSlide key={id}>
                            <div key={id} className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: `${link.bgColor}`, border: `4px solid ${link.borderColor}` }} >
                                <div className='mb-3'>
                                    <img src={link.img} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                                </div>
                                <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>{link.name}</h6>
                                <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                    {link.prara}
                                </div>
                                <hr />
                                <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>{link.opening}<span className='font-bold md:text-base text-xs text-[#33A3CF]'> {link.vancant}</span></p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className='mx-auto flex items-center justify-center text-center relative mt-10 gap-4'>
                <Link to='#' className='text-[#FA6F2C] px-10 rounded-full border bg-white border-[#FA6F2C] py-2 font-bold text-base' >Scroll </Link>
                {/* <button onClick={() => sliderRef.current?.slideNext()} className='md:block hidden p-3 border bg-white border-[#FA6F2C] rounded-full ' >
                    <BsArrowRight color='#FA6F2C' />
                </button> */}
                {/* <button onClick={() => MobilesliderRef.current?.slideNext()} className='md:hidden block p-3 border bg-white border-[#FA6F2C] rounded-full ' >
                    <BsArrowRight color='#FA6F2C' />
                </button> */}
            </div>

        </section>
    )
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-10 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                <div className='flex overflow-hidden pb-8 horizontial-div-other-gig'>
                    <div>
                        <div className="flex flex-col m-4 rounded-xl p-6 w-max " style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                        <div className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col m-4 rounded-xl p-6 w-max " style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                        <div className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col m-4 rounded-xl p-6 w-max " style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                        <div className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col m-4 rounded-xl p-6 w-max " style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                        <div className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col m-4 rounded-xl p-6 w-max " style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                        <div className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col m-4 rounded-xl p-6 w-max " style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                        <div className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col m-4 rounded-xl p-6 w-max " style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                        <div className="flex flex-col m-4 rounded-xl p-6" style={{ backgroundColor: "#F7F1FF", border: "4px solid #E0CCFB" }} >
                            <div className='mb-3'>
                                <img src={hand} alt="img" loading='lazy' className='md:h-[100%] h-[64px]' />
                            </div>
                            <h6 className='text-[#3D3E3E] font-bold md:text-lg text-xs'>Merchant  Onboarding</h6>
                            <div className='text-[#7C7C7C] font-normal md:text-base text-[10px] md:py-3 py-2'>
                                <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>
                            </div>
                            <hr />
                            <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>Current Opening : <span className='font-bold md:text-base text-xs text-[#33A3CF]'> 45+ </span></p>
                        </div>
                    </div>

                </div>
                </motion.div>
            </div>
        </section>
    );
};


export default Section6