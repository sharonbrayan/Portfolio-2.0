import React from 'react'

const Home = () => {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center ' id='home'>
            <div className='ps-md-0 ps-3 d-flex flex-column gap-2 h-50 justify-content-center'>
                <span className='d-block text-md-center fs-4 fw-bold'>Hello, I'm</span>
                <h1 className='gradient-text text-md-center fw-bolder'>Sharon Brayan Dsouza</h1>
                <span className='d-block text-md-center fs-4 fw-bold'>A Full Stack Web Developer</span>
                <p>I build applications that are simple, functional, and clean — focusing on responsive UI, smooth user experience, and solid end-to-end logic.</p>
                <div className='d-flex justify-content-center gap-2'>
                    <button className='primary-bg-color p-2 border-0 rounded-1 text-white'>View Resume</button>
                <button className='primary-text-color p-2  rounded-1 bg-transparent contact-btn text-white'>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Home