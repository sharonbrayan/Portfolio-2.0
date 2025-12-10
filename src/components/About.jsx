import React from 'react'
import DevConfigCard from './DevConfigCard'
import { FaClipboardList } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container-fluid pt-5' id='about'>
      <h2 className='text-center mb-5'><span className='sub-heading primary-text-color'>About me</span></h2>
      <div className="row">
        <div className="col-md-6 ps-3 ps-md-5 pt-md-3">
          <div className='d-flex gap-1'>
          <FaClipboardList className='m-0 p-0 my-auto primary-text-color' size={20}/>
          <h4 className='primary-text-color m-0 p-0'>Bio</h4>
          </div>
          <p className='my-4 fs-5'>I’m a MERN stack developer who learns by building real projects. I enjoy turning ideas into working applications and improving a little every day. I focus on writing clean code, understanding how things work end-to-end, and creating responsive, user-friendly interfaces.</p>
          <i className='d-block mb-4'>"Programming isn’t about what you know; it’s about what you can figure out"</i>
        </div>
        <div className="col-md-6">
          <div className='w- p-3'>
            <DevConfigCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About