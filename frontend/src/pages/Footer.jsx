import React from 'react'
import { Link } from 'react-router-dom'
import SwitchTabs from './SwitchTabs'
import fbIcon from '../images/facebook.svg'
import telegramIcon from '../images/telegram.svg'
import instaIcon from '../images/instagram.svg'
import YtIcon from '../images/youtube.svg'
import whatsAppIcon from '../images/whatsapp.svg'
import AppleStore from '../images/AppStore.svg'
import PLayStore from '../images/playStore.svg'
import footerPhone from '../images/phone.webp'

export const Footer = () => {

    const HomeLinks = [
        { name: "Apply for jobs", link: "/" },
        { name: "Start earnings", link: "/" },
        { name: "Other Gigs", link: "/" },
        { name: "Kamaao jobs", link: "/" },
        { name: "Actively hiring", link: "/" },
        { name: "Job Opportunities", link: "/" },
        { name: "Learn", link: "/" },
        { name: "Our clients", link: "/" },
        { name: "Why choose kamaao", link: "/" },
        { name: "Reviews", link: "/" },
        { name: "Download now", link: "/" },
    ]

    const BusinesLinks = [
        { name: "Apply for jobs", link: "/" },
        { name: "How it works", link: "/" },
        { name: "Our services", link: "/" },
        { name: "Why choose us", link: "/" },
        { name: "Contact now", link: "/" },
        { name: "Clients review", link: "/" },
        { name: "About app", link: "/" },
    ]
    const TeamLeader = [
        { name: "Be an Entrepreneur", link: "/" },
        { name: "Partner with", link: "/" },
        { name: "Become team leader", link: "/" },
        { name: "Why team leader", link: "/" },
        { name: "On going projects", link: "/" },
        { name: "Enroll now", link: "/" },
    ]

    const AboutUs = [
        { name: "Our story", link: "/" },
        { name: "Our team", link: "/" },
        { name: "About the founder", link: "/" },
        { name: "Life at kamaao", link: "/" },

    ]

    return (
        <footer className='container md:mx-auto md:bg-white md:mt-72 md:pb-16 md:pt-52 pb-6 text-white md:rounded-3xl rounded-lg wrap px-4 '>
            <div className='grid md:grid-cols-12'>
                <div className=' md:col-span-1'></div>
                <div className="col-span-2 md:col-span-4 mx-auto md:mx-0 z-10 md:pb-0 pb-16 text-center">
                    <div className='md:w-fit w-[93%] z-10 relative md:pt-[15rem] '>
                        <img src={footerPhone} alt="phone" className='absolute top-[-100%] left-0 w-[600px] md:block hidden' />
                        <p className='md:text-xl text-[1.75rem] md:text-start text-center font-bold md:mb-3 mb-7'>Get Download Link On your Phone</p>
                        <SwitchTabs />
                        <hr className='mx-28 mb-3' />
                        <div className="downloadLink flex flex-row justify-center gap-6">
                            <Link to='/'><img src={AppleStore} alt="img" loading='lazy' /></Link>
                            <Link to='/'><img src={PLayStore} alt="img" loading='lazy' /></Link>
                        </div>
                    </div>
                </div>
                <div className="grid-cols-6 md:col-span-2">
                    <p className='font-bold md:text-2xl text-base mb-4 uppercase '>Home</p>
                    <ul className='flex flex-col gap-3 font-normal md:text-base text-sm'>
                        {HomeLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.link} >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <p className='font-bold md:text-2xl text-base mb-4 uppercase '>Business</p>
                    <ul className='flex flex-col gap-3 mb-5 font-normal md:text-base text-sm'>
                        {BusinesLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.link} >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <p className='font-bold md:text-2xl text-base mb-4 uppercase '>About Us</p>
                    <ul className='flex flex-col gap-3 font-normal md:text-base text-sm'>
                        {AboutUs.map((link) => (
                            <li key={link.name}>
                                <Link to={link.link} >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <p className='font-bold md:text-2xl text-base mb-4 uppercase '>Team Leaders </p>
                    <ul className='flex flex-col gap-3 font-normal md:text-base text-sm'>
                        {TeamLeader.map((link) => (
                            <li key={link.name}>
                                <Link to={link.link} >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-1">
                </div>
            </div>
            <div>
                <div className="flex flex-col mt-16 md:gap-6 gap-3">
                    <div className='social-icons gap-6 flex flex-row text-center mx-auto'>
                        <Link to="/"><img src={telegramIcon} alt="img" loading='lazy' draggable='false' /></Link>
                        <Link to="/"><img src={instaIcon} alt="img" loading='lazy' draggable='false' /></Link>
                        <Link to="/"><img src={YtIcon} alt="img" loading='lazy' draggable='false' /></Link>
                        <Link to="/"><img src={fbIcon} alt="img" loading='lazy' draggable='false' /></Link>
                        <Link to="/"><img src={whatsAppIcon} alt="img" loading='lazy' draggable='false' /></Link>
                    </div>
                    <ul className='md:flex flex-row mx-auto gap-5 hidden'>
                        <li className='after:content-["|"] after:ml-5 after:text-white'><Link to="/"> Privacy Policy</Link></li>
                        <li className='after:content-["|"] after:ml-5 after:text-white'><Link to="/"> Terms of use </Link></li>
                        <li className='after:content-["|"]  after:ml-5 after:text-white'><Link to="/"> @2023 kamaao. All rights reserved.</Link></li>
                        <li className=''>support@kamaao.in</li>
                    </ul>

                    <div className='md:hidden grid text-center text-xs mx-auto'>
                        <Link to="/" className='mb-2'> @2023 kamaao. All rights reserved.</Link>
                        <ul className='flex flex-row mx-auto md:gap-5 gap-2'>
                            <li className='after:content-["|"] after:ml-5 after:text-white'><Link to="/"> Privacy Policy</Link></li>
                            <li className='after:content-["|"] after:ml-5 after:text-white'>support@kamaao.in</li>
                            <li ><Link to="/"> Terms of use </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
