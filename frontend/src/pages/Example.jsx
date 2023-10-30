import React from 'react';
import slider1 from '../images/landingPage/slider1.png';
import slider2 from '../images/landingPage/slider2.png'
import slider3 from '../images/landingPage/slider3.png'
import slider4 from '../images/landingPage/slider4.png'
import M1 from '../images/landingPage/M1.png'
import M2 from '../images/landingPage/M2.png'
import M3 from '../images/landingPage/M3.png'
import M4 from '../images/landingPage/M4.png'


import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom';

new Splide('.splide', {
    autoScroll: {
        speed: 2,
    },
});

const ExtraIncome = [
    { heading: "Apply for Jobs and Earn", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider1, mImg: M1 },
    { heading: "Earn Milestone based Incentive", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider2, mImg: M2 },
    { heading: "Complete small Gigs & Task", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider3, mImg: M3 },
    { heading: "Refer & Earn", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider4, mImg: M4 }
]

const Navbar = () => {

    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        // height       : '15rem',
    };

    return (
        <Splide
            options={ options }
            aria-labelledby="autoplay-example-heading"
            hasTrack={ false }
        >
            <div style={ { position: 'relative' } }>
                <SplideTrack>
                    {ExtraIncome.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data?.mImg} alt="img" loading='lazy' className='-mb-10 relative' />
                        <div className="absolute top-[40%] left-5 -z-10 w-[60%] h-[30%] bg-[#FFEDE3] rounded-full"></div>
                        <div className="absolute top-[20%] right-5 -z-10 w-[60%] h-[30%] bg-[#FFEDE3] rounded-full"></div>
                        <h3 key={id} className="text-[#3D3E3E] text-2xl font-bold w-[96%]  text-center mx-auto mb-2" >{data.heading}</h3>
                        <p className="font-medium text-[#7C7C7C] text-base w-[96%] mb-6 text-center mx-auto">{data.para}</p>
                        <div className='mx-auto text-center'>
                            <Link to='' className='bg-white rounded-full font-bold text-base border border-[#E78353] text-[#FA6F2C] px-5 py-2.5'>Start Earning Now</Link>
                        </div>
                    </SplideSlide>
                    ) ) }
                </SplideTrack>
            </div>

            <div className="splide__progress">
                <div className="splide__progress__bar" />
            </div>

            <button className="splide__toggle">
                <span className="splide__toggle__play">Play</span>
                <span className="splide__toggle__pause">Pause</span>
            </button>
        </Splide>
    );
};

export default Navbar;
