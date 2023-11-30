import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import slider1 from '../images/landingPage/slider1.png'
import slider2 from '../images/landingPage/slider2.png'
import slider3 from '../images/landingPage/slider3.png'
import slider4 from '../images/landingPage/slider4.png'
import M1 from '../images/landingPage/M1.png'
import M2 from '../images/landingPage/M2.png'
import M3 from '../images/landingPage/M3.png'
import M4 from '../images/landingPage/M4.png'
import { Link } from 'react-router-dom';

const ExtraIncome = [
    { heading: "Apply for Jobs and Earn", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider1, mImg: M1 },
    { heading: "Earn Milestone based Incentive", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider2, mImg: M2 },
    { heading: "Complete small Gigs & Task", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider3, mImg: M3 },
    { heading: "Refer & Earn", para: "At Kamaao we offer you a wide range of jobs opportunity with a pay scale that is higher then the industry standards.", img: slider4, mImg: M4 }
]

export default function App() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    return (
        <section className='example'>

            <Parallax pages={5} className='ll !overflow-auto'>
                {/* <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    
                </ParallaxLayer> */}

                <ParallaxLayer sticky={{ start: 1, end: 3 }} className='bg-[#FFF5EF] overflow-hidden rounded-2xl -z-10'>
                    <h2 className='font-head text-[#E78353] md:w-[100%] w-[90%] text-center mx-auto font-bold md:text-[2.6rem] text-[1.6rem] leading-8 mb-3 md:leading-normal !z-10'>Generate an extra income</h2>
                    <div style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className='w-1/2'>
                            <p className='text-[#7C7C7C] mx-2 font-bold md:text-lg text-base -mb-8 md:mb-auto'>Complete small gigs and task and earn an extra income of upto 30,000</p>

                            {
                                ExtraIncome.map((data, id) => (
                                    <div key={id} className={`mb-10 "inner-tab "}`}  >
                                        <h3 className="text-[#3D3E3E] text-2xl font-bold" >{data.heading}</h3>
                                        <p className={`"block" font-medium text-[#7C7C7C] text-base`}>{data.para}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div >
                        {
                            ExtraIncome.map((item, id) => (
                                <img key={id} src={item.img} alt="img" className='!mb-24' />
                            ))
                        }
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section>
    )
}
