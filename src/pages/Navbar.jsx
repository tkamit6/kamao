import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../images/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import menu from '../images/menu.svg'

const Navbar = () => {
    let Links = [
        { name: "Service", link: "/" },
        { name: "How it works's", link: "/" },
        { name: "Why Us?", link: "/" },
        { name: "Projects", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    
    return (
        <nav className={`shadow-md w-full z-50 sticky left-0 ms-0 top-0 bg-white `}>
            <div className='md:flex container mx-auto items-center justify-between max-w-7xl py-4 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                    </span>
                    <Link to='/'>
                        <img src={Logo} alt="images" loading='lazy' className='busy-logo-img' />
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-6 top-5 cursor-pointer md:hidden'>
                    {open ? <AiOutlineClose color='#6E6E6E' /> : < img src={menu} alt="menu" />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 nav-menu absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 md:pt-0 pt-3 px-6 transition-all duration-500 ease-in md:transition-none md:gap-8 gap-3 h-screen md:h-auto z-10 ${open ? 'top-22 ' : 'left-[-790px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-base md:my-0'>
                                <NavLink to='/' className='text-[#7C7C7C] font-bold hover:text-[#E16428] duration-200'> {link.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button className='text-white bg-orange-600 rounded-full px-8 py-2 hidden md:block'>
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Navbar