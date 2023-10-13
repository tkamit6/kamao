import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../../images/logo.svg'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import menu from '../../images/menu.svg'
import chart from '../../images/landingPage/nav-icon/chart.svg'
import messageQue from '../../images/landingPage/nav-icon/message-question.svg'
import team from '../../images/landingPage/nav-icon/team.svg'
import fbIcon from '../../images/landingPage/nav-icon/facebook.svg'
import telegramIcon from '../../images/landingPage/nav-icon/telegram.svg'
import instaIcon from '../../images/landingPage/nav-icon/instagram.svg'
import YtIcon from '../../images/landingPage/nav-icon/youtube.svg'
import whatsAppIcon from '../../images/landingPage/nav-icon/whatsapp.svg';


const Navbar = () => {
    let Links = [
        { name: "About Us", link: "/about-us", navIcon: messageQue },
        { name: "For Business", link: "/business", navIcon: chart },
        { name: "For Team Leaders", link: "/team-leader", navIcon: team },
    ];
    let [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()

    const [show, setShow] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        // console.log(window.scrollY);

    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])

    const handleMenuToggle = () => {
        setOpen(!open)
    }
    const handleMobileMenu = () => {
        setOpen(false)
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

    }

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }


    return (
        <nav className={`shadow-md w-full z-50 sticky top-0 left-0 ms-0 bg-white ${show}`}>
            <div className='md:flex container mx-auto items-center justify-between max-w-7xl md:py-1 py-4 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
                    <Link to='/'>
                        <img src={Logo} alt="images" loading='lazy' className='logo-img' />
                    </Link>
                </div>
                <div onClick={handleMenuToggle} className='text-3xl absolute right-5 top-5 cursor-pointer md:hidden'>
                    {open ? <AiOutlineClose color='#6E6E6E' /> : < img src={menu} alt="menu" />}
                </div>

                <ul className={`md:flex md:items-center md:pt-0 pt-3 md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 px-4 transition-all duration-500 ease-in md:transition-none md:gap-8 gap-3 h-screen md:h-auto z-10 ${open ? 'top-22 ' : 'left-[-790px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.link} onClick={() => { navigate(link.link) }} className={`md:ml-8 cursor-pointer text-base md:my-0 md:block hidden text-[#7C7C7C] font-bold ${pathMatchRoute(link.link) && '!text-[#E16428] font-bold'}`}>
                                {link.name}
                            </li>
                        ))
                    }
                    {/* {
                        Links.map((link) => ( */}
                    <li onClick={handleMobileMenu} className='md:ml-8 text-base md:my-0 md:hidden block'>
                        <NavLink to='/' className='text-gray-600 text-base duration-200'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 24V20" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.4283 3.76045L4.18832 11.1605C3.14832 11.9871 2.48166 13.7338 2.70832 15.0405L4.48166 25.6538C4.80166 27.5471 6.61499 29.0805 8.53499 29.0805H23.4683C25.375 29.0805 27.2017 27.5338 27.5217 25.6538L29.295 15.0405C29.5083 13.7338 28.8417 11.9871 27.815 11.1605L18.575 3.77378C17.1483 2.62712 14.8417 2.62712 13.4283 3.76045Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li onClick={handleMobileMenu} className='md:ml-8 text-base md:my-0 md:hidden block'>
                        <NavLink to='/about-us' className='text-gray-600 text-base duration-200'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6641 24.5736H17.3307L11.3974 28.5203C10.5174 29.1069 9.33073 28.4803 9.33073 27.4137V24.5736C5.33073 24.5736 2.66406 21.907 2.66406 17.907V9.9069C2.66406 5.9069 5.33073 3.24023 9.33073 3.24023H22.6641C26.6641 3.24023 29.3307 5.9069 29.3307 9.9069V17.907C29.3307 21.907 26.6641 24.5736 22.6641 24.5736Z" stroke="#6E6E6E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.0024 15.1465V14.8665C16.0024 13.9599 16.5624 13.4798 17.1224 13.0932C17.6691 12.7198 18.2157 12.2399 18.2157 11.3599C18.2157 10.1332 17.229 9.14648 16.0024 9.14648C14.7757 9.14648 13.7891 10.1332 13.7891 11.3599" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.9966 18.3337H16.0086" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            About Us
                        </NavLink>
                    </li>
                    <li onClick={handleMobileMenu} className='md:ml-8 text-base md:my-0 md:hidden block'>
                        <NavLink to='/business' className='text-gray-600 text-base duration-200'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66406 29.333H29.3307" stroke="#6E6E6E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13 5.33366V29.3337H19V5.33366C19 3.86699 18.4 2.66699 16.6 2.66699H15.4C13.6 2.66699 13 3.86699 13 5.33366Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 13.3337V29.3337H9.33333V13.3337C9.33333 11.867 8.8 10.667 7.2 10.667H6.13333C4.53333 10.667 4 11.867 4 13.3337Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.6641 19.9997V29.333H27.9974V19.9997C27.9974 18.533 27.4641 17.333 25.8641 17.333H24.7974C23.1974 17.333 22.6641 18.533 22.6641 19.9997Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            For Business
                        </NavLink>
                    </li>
                    <li onClick={handleMobileMenu} className='md:ml-8 text-base md:my-0 md:hidden block'>
                        <NavLink to='/team-leader' className='text-gray-600 duration-200 text-base'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9975 9.547C23.9175 9.53366 23.8242 9.53366 23.7442 9.547C21.9042 9.48033 20.4375 7.97366 20.4375 6.10699C20.4375 4.20033 21.9708 2.66699 23.8775 2.66699C25.7842 2.66699 27.3175 4.21366 27.3175 6.10699C27.3042 7.97366 25.8375 9.48033 23.9975 9.547Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.6259 19.2539C24.4526 19.5605 26.4659 19.2405 27.8793 18.2939C29.7593 17.0405 29.7593 14.9872 27.8793 13.7339C26.4526 12.7872 24.4126 12.4672 22.5859 12.7872" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.96063 9.547C8.04063 9.53366 8.13396 9.53366 8.21396 9.547C10.054 9.48033 11.5206 7.97366 11.5206 6.10699C11.5206 4.20033 9.98729 2.66699 8.08063 2.66699C6.17396 2.66699 4.64062 4.21366 4.64062 6.10699C4.65396 7.97366 6.12063 9.48033 7.96063 9.547Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.33521 19.2539C7.50854 19.5605 5.49521 19.2405 4.08188 18.2939C2.20188 17.0405 2.20188 14.9872 4.08188 13.7339C5.50854 12.7872 7.54854 12.4672 9.3752 12.7872" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.9975 19.507C15.9175 19.4936 15.8242 19.4936 15.7442 19.507C13.9042 19.4403 12.4375 17.9336 12.4375 16.067C12.4375 14.1603 13.9708 12.627 15.8775 12.627C17.7842 12.627 19.3175 14.1736 19.3175 16.067C19.3042 17.9336 17.8375 19.4536 15.9975 19.507Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.1209 23.7065C10.2409 24.9598 10.2409 27.0131 12.1209 28.2665C14.2543 29.6931 17.7476 29.6931 19.8809 28.2665C21.7609 27.0131 21.7609 24.9598 19.8809 23.7065C17.7609 22.2932 14.2543 22.2932 12.1209 23.7065Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            For Team Leaders
                        </NavLink>
                    </li>

                    {/* )) */}
                    {/* } */}
                    <div>

                        <button className='text-white bg-orange-600 mb-8 rounded-full w-fit px-5 py-2 md:hidden block'>
                            Contact Us
                        </button>
                        <p className='mb-4 text-[#7C7C7C] text-base md:hidden block'>Follow us on</p>
                        <div className='social-icons gap-6 flex flex-row items-center mx-auto md:hidden'>
                            <Link to="/"><img src={telegramIcon} alt="img" loading='lazy' draggable='false' /></Link>
                            <Link to="/"><img src={instaIcon} alt="img" loading='lazy' draggable='false' /></Link>
                            <Link to="/"><img src={YtIcon} alt="img" loading='lazy' draggable='false' /></Link>
                            <Link to="/"><img src={fbIcon} alt="img" loading='lazy' draggable='false' /></Link>
                            <Link to="/"><img src={whatsAppIcon} alt="img" loading='lazy' draggable='false' /></Link>
                        </div>
                    </div>
                </ul>
                <button className='text-white bg-orange-600 rounded-full px-8 py-2 hidden md:block'>
                    Contact Us
                </button>
            </div>
        </nav>
    )
}

export default Navbar