import React, { useState } from 'react'
import imgGirl from '../../images/team-leader/form-girl.webp'
import userIcon from '../../images/team-leader/userIcon.svg'
import phoneIcon from '../../images/team-leader/phoneIcon.svg'
import mailIcon from '../../images/team-leader/mailIcon.svg'
import loactionIcon from '../../images/team-leader/locationIcon.svg'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import axios from 'axios'
import loadingSVG from '../../images/loading.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'sweetalert2/src/sweetalert2.scss'

export default function Section6() {
    const [formStep, setformStep] = useState(1)
    const [loading, setloading] = useState(false)

    const [formData, setformData] = useState({
        fullname: '',
        phone: '',
        email: '',
        city: '',
        briefIndustry: '',
        managingTeamExpierence: '',
        devoteProgram: '',
        teamSize: '',
    })

    const { managingTeamExpierence, teamSize, devoteProgram, email } = formData;

    const onChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value })
    }

    const SubmitformStep1 = (e) => {
        e.preventDefault();
        if (!email) {
            alert('Enter Valid Email')
            return;
        }
        setformStep(2)
    }
    const apiUrl = 'https://kamao-api.vercel.app';
    const finalformSubmit = async (e) => {
        e.preventDefault()

        try {
            setloading(true)

            const res = await axios.post('https://kamao-api.vercel.app/sendmail', formData)
                .then(response => { console.log(response) });

            setloading(false)
            toast.success('Data Sent Successfully!')
            setformStep(1)
            setformData({
            })
        } catch (error) {
            setloading(false)
            toast.error('Something went wrong!')
            console.log(error);
        }
    }

    return (
        <section className='team-enroll container mx-auto md:mb-8 md:my-8 md:py-10 bg-[#FFF5EF] py-4 max-w-7xl wrap '>
            <div className='md:py-16 md:mx-[102px]'>

                <div className='md:grid md:grid-cols-12 md:space-x-16 md:mx-0 mx-4 relative'>
                    <div className="col-span-5 md:text-start text-center md:mb-auto mb-6 mx-auto md:w-full w-[93%]">
                        <h2 className='text-[#E78353] font-bold md:text-[42px] text-[2rem] font-head'>Enroll Now</h2>
                        <p className='text-[#7C7C7C] font-medium md:text-lg text-base'>Lorem ipsum dolor sit amet consectetur. Velit luctus pulvinar augue morbi ultricies </p>
                        <img src={imgGirl} alt="girl" className='md:block hidden' />
                    </div>
                    <div className="col-span-7 bg-white p-6 rounded-xl">
                        {
                            formStep === 1 ? (
                                <form onSubmit={SubmitformStep1} className='space-y-4'>
                                    <p className='font-bold md:text-2xl text-lg text-[#3D3E3E] md:mb-6 mb-4'>Personal Details</p>
                                    <div className='relative items-center flex'>
                                        <img src={userIcon} alt="user" className='absolute' />
                                        <input type="text" onChange={onChange} id='fullname' placeholder='Full Name' className='w-full border-solid border-[#6E6E6E] rounded-md py-2 ps-10 focus:outline-[#E78353]' />
                                    </div>
                                    <div className='relative items-center flex'>
                                        <img src={phoneIcon} alt="user" className='absolute' />
                                        <input type="text" onChange={onChange} id='phone' placeholder='Phone Number' className='w-full border-solid !border-[#6E6E6E] rounded-md py-2 ps-10 focus:outline-[#E78353]' />
                                    </div>
                                    <div className='relative items-center flex'>
                                        <img src={mailIcon} alt="user" className='absolute' />
                                        <input type="text" onChange={onChange} id='email' placeholder='Email' className='w-full border-solid border-[#6E6E6E] rounded-md py-2 ps-10 focus:outline-[#E78353]' />
                                    </div>
                                    <div className='relative items-center flex'>
                                        <img src={loactionIcon} alt="user" className='absolute' />
                                        <input type="text" onChange={onChange} id='city' placeholder='City' className='w-full border-solid border-[#6E6E6E] rounded-md py-2 ps-10 focus:outline-[#E78353]' />
                                    </div>
                                    <div>
                                        <p className='font-bold md:text-2xl text-lg text-[#3D3E3E] md:mb-6 mb-2'>Who Are You?</p>
                                        <label className="flex items-center checkbox-container mb-3 space-x-2">
                                            <input type="checkbox" className="" />
                                            <div className="checkmark"></div>
                                            <span className="text-[#7C7C7C] font-medium md:text-lg text-base">Experienced field agent</span>
                                        </label>
                                        <label className="flex items-center checkbox-container mb-3 space-x-2">
                                            <input type="checkbox" className="" />
                                            <div className="checkmark"></div>
                                            <span className="text-[#7C7C7C] font-medium md:text-lg text-base">Entrepreneur</span>
                                        </label>
                                        <label className="flex items-center checkbox-container mb-3 space-x-2">
                                            <input type="checkbox" className="" />
                                            <div className="checkmark"></div>
                                            <span className="text-[#7C7C7C] font-medium md:text-lg text-base">Community leader (SHG, Mitra, Sahaj, etc.)</span>
                                        </label>
                                        <label className="flex items-center checkbox-container mb-3 space-x-2">
                                            <input type="checkbox" className="" />
                                            <div className="checkmark"></div>
                                            <span className="text-[#7C7C7C]  font-medium md:text-lg text-base">SMB business owner</span>
                                        </label>
                                        <label className="flex items-center checkbox-container mb-3 space-x-2">
                                            <input type="checkbox" className="" />
                                            <div className="checkmark"></div>
                                            <span className="text-[#7C7C7C] font-medium md:text-lg text-base">Agency owner/ manage</span>
                                        </label>
                                        <label className="flex items-center checkbox-container mb-3 space-x-2">
                                            <input type="checkbox" className="" />
                                            <div className="checkmark"></div>
                                            <span className="text-[#7C7C7C]  font-medium md:text-lg text-base">Other</span>
                                        </label>
                                        <button type='submit' className='bg-[#FA6F2C] gap-x-3 mt-6 flex items-center rounded-3xl py-2 px-6 me-2 relative text-white font-bold cursor-pointer'>Next <BsArrowRight color='#fff absolute' /> </button>
                                    </div>

                                </form>
                            ) : (
                                <form onSubmit={finalformSubmit} className='gap-5'>
                                    <div className='mb-6'>
                                        <p className='md:font-medium font-bold md:text-2xl text-lg md:mb-6 mb-3 text-[#3D3E3E] md:leading-[28px] leading-[22px]'>Do you have experience of managing team for field sales or field marketing activities?</p>
                                        <select id="managingTeamExpierence" value={managingTeamExpierence} onChange={onChange} className="w-full border cursor-pointer border-solid border-[#6E6E6E]  rounded-md py-3 px-2 focus:outline-[#E78353] hover:border-[#E78353]">
                                            <option >Select yes or no</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <div className='mb-6'>
                                        <p className='md:font-medium font-bold md:text-2xl text-lg md:mb-6 mb-3 text-[#3D3E3E] md:leading-[28px] leading-[22px]'>How much time would you be able to devote to this program per day?</p>
                                        <select id="devoteProgram" value={devoteProgram} onChange={onChange} className="w-full cursor-pointer border border-solid border-[#6E6E6E] rounded-md mb-8 py-3 px-2 focus:outline-[#E78353] hover:border-[#E78353]">
                                            <option className='py-3 h-40'>Select your time limit</option>
                                            <option className='py-3 p-6' value="6-hours">Upto 6 Hours</option>
                                            <option value="10-hours">Upto 10 Hours</option>
                                        </select>

                                        <select id="teamSize" value={teamSize} onChange={onChange} className="w-full cursor-pointer border border-solid border-[#6E6E6E] rounded-md py-3 px-2 focus:outline-[#E78353] hover:border-[#E78353]">
                                            <option className='py-3 h-40'>Select previous team size</option>
                                            <option className='py-3 p-6' value="10-20">10-20 </option>
                                            <option value="20-40">20-40</option>
                                        </select>
                                    </div>

                                    <div className='mb-6'>
                                        <p className='md:font-medium font-bold md:text-2xl text-lg md:mb-6 mb-3 text-[#3D3E3E] md:leading-[28px] leading-[22px]'>Share a brief about your past industry.</p>
                                        <textarea onChange={onChange} cols='4' rows='5' type="text" id='briefIndustry' placeholder='Write here' className='w-full border-solid border-[#6E6E6E] rounded-md p-4  focus:outline-[#E78353]' />
                                    </div>
                                    <div className='flex space-x-4'>
                                        <button type='button' onClick={() => setformStep(1)} className='bg-white text-[#FA6F2C] gap-x-3 mt-6 flex items-center rounded-3xl py-2 px-5 me-2 relative border border-[#FA6F2C] font-bold cursor-pointer'><BsArrowLeft color='#fff absolute' /> Previous  </button>
                                        <button type='submit' className='bg-[#FA6F2C] text-white gap-x-3 mt-6 flex items-center rounded-3xl py-2 px-9 me-2 relative border border-[#FA6F2C] font-bold cursor-pointer'> {loading ? (<img src={loadingSVG} alt='loading' className='h-6 w-6' />) : 'Submit'}  </button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    )
}
