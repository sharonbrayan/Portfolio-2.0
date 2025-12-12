import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <div class="row">
            <div className="col-md-6 d-none d-md-block">
                <span className='fs-4 fw-bold primary-text-color'>Sharon Brayan Dsouza</span>
        <p>A passionate full stack web developer</p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
                <p className='mt-3 primary-text-color fw-medium'>&copy; 2025 | Built with <span className='text-white'>&#9829;</span> and React.js by Sharon</p>
            </div>
        </div>
    </div>
  )
}

export default Footer