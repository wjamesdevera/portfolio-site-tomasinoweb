import React from 'react'
import { facebook, github, linkedin } from '../assets'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 justify-center items-center bg-neutral-200 py-3 w-full shrink-0'>
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
      <p className='text-xs'>
        Copyright © 2021 Winfrey De Vera. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer