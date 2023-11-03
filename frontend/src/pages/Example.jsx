import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import hand from '../images/landingPage/hand.svg';
import id from '../images/landingPage/id.svg';
import creditCard from '../images/landingPage/creditCard.svg';
import dopening from '../images/landingPage/d-ac-opening.svg';
import homeLoan from '../images/landingPage/homeLoan.svg';
import saving from '../images/landingPage/saving.svg';
import qr from '../images/landingPage/qr.svg';
import surveyfrom from '../images/landingPage/survey.svg';

const Example = () => {
    return (
        <div className="bg-neutral-800">
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll down
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll up
                </span>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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

export default Example;

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