import React, { useState } from 'react'
import user from '../../images/form/user.svg'
import phone from '../../images/form/phone.svg'
import mail from '../../images/form/mail.svg'
import bag from '../../images/form/bag.svg'
import office from '../../images/form/office.svg'
import category from '../../images/form/category.svg'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import S from './S'


const Section7 = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        job: '',
        company: '',
        category: '',
        message: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmitStep1 = (e) => {
        e.preventDefault();

        // if (formData.name == "" || formData.phone == "" || formData.email == "" || formData.job == "" || formData.company == "") {
        //     alert("Fill the details")
        //     return false
        // }
        setStep(2);
    };

    const handleSubmitStep2 = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <section className='section7 container mx-auto md:py-10 py-2 px-4 bg-[#E78353] max-w-7xl wrap'>
            <div className='grid md:grid-cols-6 grid-cols-6 '>
                <div className="md:col-span-4 col-span-6 md:px-[102px] section7Content">
                
                    <h2 className='font-heading text-[#E78353] font-bold md:text-[42px] text-[28px] '>Leverage Your Business <br /> With Us!</h2>
                    {step === 1 ? <form className='mt-6 flex flex-col gap-5 bg-white p-6 rounded-lg' onSubmit={handleSubmitStep1}>
                        <div className='flex items-center relative'>
                            <img src={user} alt="img" className='absolute ' />
                            <input type="text" placeholder='Full Name' className='w-full border-solid border-[#6E6E6E] rounded-md py-2 ps-10' name="name"
                                value={formData.name}
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={phone} alt="phone" loading='lazy' className='absolute' />
                            <input type="text" placeholder='Phone No.' className='w-full border-solid border-[#6E6E6E] rounded-md py-2 ps-10' name="phone"
                                value={formData.phone}
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={mail} alt="mail" className='absolute' loading='lazy' />
                            <input type="text" placeholder='Email' className=' border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="email"
                                value={formData.email}
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={bag} alt="bag" loading='lazy' className='absolute' />
                            <input type="text" placeholder='Job Title' className=' border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="job"
                                value={formData.job}
                                onChange={handleChange} />
                        </div>
                        <div className="flex items-center relative">
                            <img src={office} alt="office" loading='lazy' className='absolute' />
                            <input type="text" placeholder='Company' className=' border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="company"
                                value={formData.company}
                                onChange={handleChange} />
                        </div>
                        <div className="relative items-center flex">
                            <input className='bg-[#FA6F2C] rounded-3xl py-3 w-full text-white font-bold cursor-pointer' type="submit" value={"Next"} />
                            <p className='absolute right-1 font-bold pe-10'><BsArrowRight color='#fff' /></p>
                        </div>

                    </form> : (
                        <form onSubmit={handleSubmitStep2} className='mt-6 flex flex-col gap-3 bg-white p-6 rounded-lg' >
                            <div className="flex items-center relative">
                                <img src={category} alt="category" loading='lazy' className='absolute' />
                                <input type="text" placeholder='Category' className=' border-solid border-[#6E6E6E] rounded-md py-2 ps-10 w-full' name="category"
                                    value={formData.category}
                                    onChange={handleChange} />
                            </div>
                            <p className='text-[#3D3E3E] font-bold text-lg'>Estimate Budget?</p>
                            <div className='gap-3 flex'>
                                <input type="checkbox" value={"Less than 5 lakh"} className="accent-[#FA6F2C] checked:bg-blue-500" id="1" /><label htmlFor="1"> Less than 5 lakh </label>
                            </div>
                            <div className='gap-3 flex'>
                                <input type="checkbox" value={"Between 5 - 20 lakh"} className="accent-[#FA6F2C] checked:bg-blue-500" id="2" /><label htmlFor="2"> Between 5 - 20 lakh </label>
                            </div>
                            <div className='gap-3 flex'>
                                <input type="checkbox" value={"More than 20 Lakh"} className="accent-[#FA6F2C] checked:bg-blue-500" id="3" /><label htmlFor='3'> More than 20 Lakh </label>
                            </div>
                            <textarea name="message" id="message" cols="30" rows="4" value={formData.message} onChange={handleChange} className='border-solid border-[#6E6E6E] rounded-xl py-2 ps-5' placeholder='Describe your requirement in short.'></textarea>
                            <div className='flex gap-6'>
                                <div className="flex items-center w-full relative">
                                    <p className='absolute ps-5'><BsArrowLeft color='#FA6F2C' /></p>
                                    <button onClick={() => setStep(1)} className='bg-white ps-7 rounded-3xl w-full py-2 text-[#FA6F2C] border-2 border-solid border-[#FA6F2C] font-bold cursor-pointer' type="submit">Previous</button>
                                </div>
                                <div className="flex items-center w-full relative">
                                    <p className='absolute right-1 pe-4'><BsArrowRight color='#fff' /></p>
                                    <button className='bg-[#FA6F2C] rounded-3xl pe-6 w-full py-2 text-white font-bold cursor-pointer' type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
                {/* <div className="col-span-2"></div> */}
            </div>
        </section>
    )
}

export default Section7