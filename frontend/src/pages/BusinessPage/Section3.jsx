import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MyContext from './Mycontext';

const Section3 = ({ tabList }) => {

    const [toggle, setToggle] = useState(0);

const tabContentFoodDelievry = useContext(MyContext)
    const tabContentEcomDelievry = [
        { id: "01", name: "Ecom Delivery Partner", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", vacantColor: "#33A3CF"},
        { id: "02", name: "Food Delivery Partner", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", vacantColor: '#33A3CF' },
        { id: "03", name: "Grocery Delivery Partner", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 10+", link: "/", vacantColor: '#F0B428' },
        { id: "04", name: "Medical Supply Deliveries", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: <span className='customRed'> Less than 10 </span>, link: "/", vacantColor:'#FF3F3F' },
        { id: "05", name: "3PL Courier Partners", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: "  45+", link: "/", vacantColor: '#33A3CF' },
        { id: "06", name: "Regular Courier Delivery Executive", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", vacantColor: '#33A3CF' }
    ]

    const hangeHandle = (index) => {
        setToggle(index);
    }

    return (
        <section className='container mx-auto py-3 md:py-16 max-w-7xl wrap '>
            <h1 className='text-center font-bold md:text-5xl text-2xl font-head md:mb-16 mb-12 text-[#3D3E3E]'>Our  <span className='text-[#E78353] font-head'> Services </span></h1>
            <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-3 bg-[#FFF5EF] rounded-2xl">
                    <ul className="tabList">
                        {tabList.map((link, id) => (
                            <li key={id} onClick={() => hangeHandle(id)} className='md:px-5 py-4 '> <Link to='' className={`font-bold text-base transition duration-200 ease-in-out flex flex-row items-center py-4 px-5 gap-4 rounded-lg ${toggle === id ? "bg-[#E16428] text-[#fff] " : "hover:bg-[#E16428]  bg-[#fff] hover:text-white  text-[#7C7C7C] "}`}>
                                <img src={link.img} alt="img" />
                                {link.name}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="md:col-span-1"></div> */}
                <div className="md:col-span-9 bg-[#FFF5EF] rounded-2xl">
                    <div className="content  mx-auto justify-between px-4 md:pb-0 pb-6 md:px-9">
                        {/* <div className="tabContent"> */}
                        <div className="mx-auto text-center">
                            <h2 className='text-center py-6 text-[#E78353] font-bold text-2xl'>{tabList[toggle].name}</h2>
                        </div>
                        <div className=" grid md:grid-cols-2 grid-cols-2 md:gap-y-4 md:gap-x-8 gap-x-4 ">
                            {
                                tabContentFoodDelievry.map((link, id) => (
                                    <div key={id} className={`cards cards-transition mt-3 rounded-lg col-span-1 md:p-8 p-4 ${toggle === 0 ? "" : "hidden"} `} >
                                        <h6 className='font-bold md:text-2xl text-lg'>{link.id}</h6>
                                        <h6 className='font-bold md:text-lg text-xs '>{link.name}</h6>
                                        <div className='p font-normal md:text-base text-[10px] md:py-3 py-2 '>
                                            {link.prara}
                                        </div>
                                        <hr  className='border'/>
                                        <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-[#000] text-bold'>{link.opening}<span className={`font-bold md:text-base text-xs text-[${link?.vacantColor}`}> {link?.vancant}</span></p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-2 md:gap-y-4 md:gap-x-8 gap-x-4 ">
                            {
                                tabContentEcomDelievry.map((link, id) => (
                                    <div key={id} className={`cards cards-transition mt-3 rounded-lg col-span-1 md:p-8 p-4 flex flex-col  ${toggle === 1 ? "bg-[#fff]" : "hidden"} `} >
                                        <h6 className='font-bold md:text-2xl text-lg'>{link.id}</h6>
                                        <h6 className='font-bold md:text-lg text-xs'>{link.name}</h6>
                                        <div className='p font-normal md:text-base text-[10px] md:py-3 py-2'>
                                            {link.prara}
                                        </div>
                                        <hr className='border'/>
                                        <p className='md:pt-4 pt-2 font-normal md:text-base text-xs text-bold'>{link.opening}<span className='font-bold md:text-base text-xs'> {link.vancant}</span></p>
                                    </div>
                                ))
                            }
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3