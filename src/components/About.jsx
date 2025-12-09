import React from 'react'
import DevConfigCard from './DevConfigCard'

const About = () => {
  return (
    <div className='container-fluid pt-5' id='about'>
      <div className="row">
        <div className="col-md-6 ps-3 ps-md-5 pt-md-3">
          <h2 className='primary-text-color text-md-start text-center mb-3'>About Me</h2>
          <p className='my-4 fs-5'>I’m a MERN stack developer who learns by building real projects. I enjoy turning ideas into working applications and improving a little every day. I focus on writing clean code, understanding how things work end-to-end, and creating responsive, user-friendly interfaces.</p>
          <i className='d-block mb-4'>"Programming isn’t about what you know; it’s about what you can figure out"</i>
        </div>
        <div className="col-md-6">
          <div className='w- p-3 mx-auto'>
            <DevConfigCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About