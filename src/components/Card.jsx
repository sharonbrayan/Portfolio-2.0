import React from 'react'
import './card.css'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
const Card = ({ classname, liveLink, gitLink, title, description, features, techStack }) => {
  return (
    <div className=' w-100 project-card pointer mb-4'>

      <div className={`${classname} position-relative rounded-top-2`} style={{ height: '100px' }}>
        <div className='position-absolute top-0 start-0 pt-3 ps-3 d-flex gap-2'>
          {liveLink && <a className='text-white pointer scale' href={liveLink} target='_blank'><HiMiniArrowTopRightOnSquare size={30} /></a>}
          <a href={gitLink} target='_blank' className='text-white pointer scale'><FaGithub size={28} /></a>
        </div>
      </div>
      <h4 className='mt-2 ms-3 title'>{title}</h4>
      <p className='ms-3 font-monospace'>{description}</p>
      <span className='ms-3 fw-medium fs-5'>Key Features</span>
      <ul className='ms-3'>
        {features.map((feature, i) => (
          <li key={i} className='fst-italic'>{feature}</li>
        ))}
      </ul>
      <hr />
      <span className='ms-3 fw-medium fs-6 mb-1 d-inline-block'>Tech Stack Used</span><br />
      {techStack.map((tech) => (
        <span key={tech} className='badge rounded-pill purple ms-3 mb-2'>{tech}</span>
      ))}
    </div>
  )
}

export default Card