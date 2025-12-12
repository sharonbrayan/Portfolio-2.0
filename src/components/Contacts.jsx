import React from 'react'
import { BiPhone, BiPhoneIncoming } from 'react-icons/bi'
import { FaGithub, FaLocationArrow } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { LiaLinkedin } from 'react-icons/lia'
import { TfiEmail } from 'react-icons/tfi'
import './contacts.css'


const Contacts = () => {
  return (<>
    <div id='contact' className='container mb-5'>
      <h2 className='text-center my-5'><span className='sub-heading primary-text-color'>Get In Touch</span></h2>
      <div className="row p-md-2 p-3 d-flex justify-content-between gap-5">
        <div className="col-md-5 pb-2 pt-3 contact-card">
            <h4 className='primary-text-color mb-3'>Contact Information</h4>
            <hr />
            <div className='d-flex align-items-center justify-content-center flex-column gap-3'>
              <div className='w-100 d-flex gap-5'>
                <BiPhone size={30} className='primary-text-color' />
                <span className=''>+91 8921340447</span>
              </div>
              <div className='w-100 d-flex gap-5'>
                <TfiEmail size={25} className='primary-text-color ' />
                <span className=''>sharonbrayan087@gmail.com</span>
              </div>
              <div className='w-100 d-flex gap-5'>
                <IoLocationSharp size={30} className='primary-text-color' />
                <span className=''>Kasaragod, Kerala, India</span>
              </div>
            </div>
        </div>
        <div className="col-md-5 pb-2 pt-3 contact-card">
          <h4 className='primary-text-color mb-3'>Contact With Me</h4>
          <hr />
          <div className='d-flex gap-3 justify-content-center mt-4'>
            <div className="round"><TfiEmail size={30} className='icons' /></div>
            <div className="round"><BiPhone size={30} className='icons' /></div>
            <div className="round"><FaGithub size={30} className='icons' /></div>
            <div className="round"><LiaLinkedin size={35} className='icons' /></div>
          </div>
        </div>
      </div>
    </div>
      <hr />
    </>
  )
}

export default Contacts