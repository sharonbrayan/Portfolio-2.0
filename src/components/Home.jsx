import React from 'react'

const Home = () => {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center ' id='home'>
            <div className='ps-md-0 ps-3 d-flex flex-column gap-2 h-50 justify-content-center'>
                <span className='d-block text-center fs-4 fw-bold'>Hello, I'm</span>
                <h1 className='gradient-text text-center fw-bolder'>Sharon Brayan Dsouza</h1>
                <span className='d-block text-center fs-4 fw-bold'>A Full Stack Web Developer</span>
                <p className='lora-text fs-6 text-center'>I build applications that are simple, functional, and clean — focusing on responsive UI, smooth user experience, and solid end-to-end logic.</p>
                <div className='d-flex justify-content-center gap-2 mt-5'>
                    <button className='primary-bg-color p-2 rounded-1  btn-1'>View Resume</button>
                <button className=' p-2  rounded-1 btn-2 '>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Home