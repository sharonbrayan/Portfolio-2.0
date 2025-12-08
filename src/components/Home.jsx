import React from 'react'

const Home = () => {
    return (
        <div className='vh-100 vw-100 d-flex align-items-center justify-content-center'>
            <div className=''>
                <span className='d-block text-center fs-4 fw-bold'>Hello, I'm</span>
                <h1 className='gradient-text text-center fw-bolder'>Sharon Brayan Dsouza</h1>
                <span className='d-block text-center fs-4 fw-bold mt-2'>A Full Stack Web Developer</span>
                <div className='d-flex justify-content-center gap-2 mt-3'>
                    <button className='primary-bg-color p-2 border-0 rounded-1 text-white'>View Resume</button>
                <button className='primary-text-color p-2  rounded-1 bg-transparent contact-btn text-white'>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Home