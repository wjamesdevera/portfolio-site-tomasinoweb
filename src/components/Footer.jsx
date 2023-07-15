import React from 'react'
import { facebook, github, linkedin } from '../assets'

const Footer = () => {
  return (
    <div className='relative bottom-0 flex flex-col gap-4 justify-center items-center bg-neutral-100 px-16 py-10 w-full'>
      <div className="
      flex items-center gap-4">
        <a href="https://www.facebook.com/w.jamesdevera" target='_blank'>
          <img src={facebook} alt="facebook_link" className='w-8'/>
        </a>
        <a href="https://github.com/wjamesdevera" target='_blank'>
          <img src={github} alt="" className='w-8'/>
        </a>
        <a href="https://www.linkedin.com/in/wjamesdevera/" target='_blank'>
          <img src={linkedin} alt="" className='w-8'/>
        </a>
      </div>
      <p>
        Copyright © 2021 Winfrey De Vera. All rights reserved.
      </p>
    </div>
  )
}

export default Footer