import React from 'react'
import { facebook, linkedin, github, email, instagram } from '../assets'
import styles from '../style'

const Contacts = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="mb-12">
            Contact Me
        </div>
        <div className="grid grid-cols-2 gap-4 w-full text-lg">
            <div className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4">
                <img src={email} alt="" className='w-12'/>
                <p>Email</p>
            </div>
            <div className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4">
                <img src={linkedin} alt="" className='w-12'/>
                <p>LinkedIn</p>
            </div>
            <div className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4">
                <img src={github} alt="" className='w-12'/>
                <p>Github</p>
            </div>
            <div className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4">
                <img src={instagram} alt="" className='w-12'/>
                <p>Instagram</p>
            </div>
        </div>
    </div>
  )
}

export default Contacts