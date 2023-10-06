import React, { useState } from 'react'
import user from '../../images/form/user.svg'
import phone from '../../images/form/phone.svg'
import mail from '../../images/form/mail.svg'
import bag from '../../images/form/bag.svg'
import office from '../../images/form/office.svg'
import category from '../../images/form/category.svg'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import axios from 'axios';
import loadingSVG from '../../images/loading.svg';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify'


const Section7 = () => {

    const [step, setStep] = useState(1);
    const [loading, setloading] = useState(false)
    const [formData, setFormData] = useState({
        fullname: '' || "Not Provided",
        email: '' || "Not Provided",
        phone: '' || "Not Provided",
        job: '' || "Not Provided",
        company: '' || "Not Provided",
        category: '' || "Not Provided",
        message: '' || "Not Provided",
        EstimateBudget: [] || "Not Provided",
    });

    const handleChange = (e) => {
        const { value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setFormData({
                    ...formData,
                    EstimateBudget: [...formData.EstimateBudget, value],
                });
            } else {
                setFormData({
                    ...formData,
                    EstimateBudget: formData.EstimateBudget.filter((item) => item !== value),
                });
            }
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmitStep1 = (e) => {
        e.preventDefault();

        if (!formData.email) {
            alert("Enter Valid Email")
            return false
        }
        setStep(2);
    };

    const handleSubmitStep2 = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            setloading(true)
            const resp = await axios.post('https://kamao-api.vercel.app/sendmail/business', formData).then(res => console.log(res));
            toast.success('Thanks for sharing your details. We will contact you shortly.')
            setloading(false)
            setStep(1)
            setFormData({
                
            })
          
        } catch (error) {
            setloading(false)
            toast.error('Something went wrong!')
            console.log(error);
        }

    };


    return (
        <section className='section7 md:h-[758px] h-[647px] container mx-auto md:py-10 py-2 px-4 bg-[#E78353] max-w-7xl wrap'>
            <div className='grid md:grid-cols-6 grid-cols-6 '>
                <div className="md:col-span-4 col-span-6 md:px-[102px] section7Content">

                    <h2 className='font-heading text-[#E78353] font-bold md:text-[42px] font-head text-[28px] '>Leverage Your Business <br /> With Us<span className='font-head font-thin'>!</span></h2><span></span>
                    {step === 1 ? <form className='mt-6 flex flex-col gap-5 bg-white px-6 py-3 rounded-lg' onSubmit={handleSubmitStep1}><p className='md:hidden block text-[#3D3E3E] text-bold text-lg'>Personal Details</p>
                        <div className='flex items-center relative'>
                            <img src={user} alt="img" className='absolute ' />
                            <input type="text" placeholder='Full Name' className='w-full focus:outline-[#FA6F2C] border-solid border-[#6E6E6E] rounded-md py-2 ps-10' name="fullname"
                                
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={phone} alt="phone" loading='lazy' className='absolute' />
                            <input type="text" placeholder='Phone Number' className='w-full focus:outline-[#FA6F2C] border-solid border-[#6E6E6E] rounded-md py-2 ps-10' name="phone"
                                
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={mail} alt="mail" className='absolute' loading='lazy' />
                            <input type="text" placeholder='Email' className=' focus:outline-[#FA6F2C] border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="email"
                                
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={bag} alt="bag" loading='lazy' className='absolute' />
                            <input type="text" placeholder='Job Title' className=' focus:outline-[#FA6F2C] border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="job"
                                
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={office} alt="office" loading='lazy' className='absolute' />
                            <input type="text" placeholder='Company' className=' focus:outline-[#FA6F2C] border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="company"
                                
                                onChange={handleChange} />
                        </div>
                        <div className="relative items-center flex">
                            <button type='submit' className='bg-[#FA6F2C] focus:outline-[#FA6F2C] flex md:block items-center px-6 rounded-3xl py-2 md:w-full w-[40%] relative text-white font-bold cursor-pointer'>Next  <BsArrowRight color='#fff' className='md:hidden block absolute right-5  font-bold ' /> </button>
                        </div>

                    </form> : (
                        <form onSubmit={handleSubmitStep2} className='mt-6 flex flex-col gap-3 bg-white p-6 rounded-lg' >
                            <div className="flex items-center relative">
                                <img src={category} alt="category" loading='lazy' className='absolute' />
                                <input type="text" placeholder='Category' className=' focus:outline-[#FA6F2C] border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="category"
                                    
                                    onChange={handleChange} />
                            </div>
                            <p className='text-[#3D3E3E] font-bold text-lg'>Estimate Budget?</p>
                            <div className='gap-3 flex'>
                                <input type="checkbox" className="accent-[#FA6F2C] checked:text-white" name='5 lakh' id="1"  value="Less than 5 lakh" onChange={handleChange} /><label htmlFor="1" > Less than 5 lakh </label>
                            </div>
                            <div className='gap-3 flex'>
                                <input type="checkbox" value="Between 5 - 20 lakh" className="accent-[#FA6F2C] " id="2" name='5-20 lakh'onChange={handleChange}  /><label htmlFor="2"> Between 5 - 20 lakh </label>
                            </div>
                            <div className='gap-3 flex'>
                                <input type="checkbox" value="More than 20 Lakh" className="accent-[#FA6F2C] checked:bg-blue-500" id="3" name='20 lakh' onChange={handleChange} /><label htmlFor='3'> More than 20 Lakh </label>
                            </div>
                            <textarea name="message" id="message" cols="30" rows="4"  onChange={handleChange} className='border-solid focus:outline-[#FA6F2C] border-[#6E6E6E] rounded-xl py-2 ps-5' placeholder='Describe your requirement in short.'></textarea>
                            <div className='flex gap-6'>
                                <div className="flex items-center w-full relative">
                                    <p className='absolute ps-5'><BsArrowLeft color='#FA6F2C' /></p>
                                    <button onClick={() => setStep(1)} className='bg-white ps-7 rounded-3xl w-full py-2 text-[#FA6F2C] border-2 border-solid border-[#FA6F2C] font-bold cursor-pointer' type="submit">Previous</button>
                                </div>
                                <div className="flex items-center w-full relative">
                                    <button className='bg-[#FA6F2C] flex justify-center rounded-3xl px-6 w-full py-2 text-white font-bold cursor-pointer' type="submit">{loading ? (<img src={loadingSVG} alt='loading' className='h-6 w-6' />) : 'Submit'}</button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
                {/* <div className="col-span-2"></div> */}
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
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

export default Section7