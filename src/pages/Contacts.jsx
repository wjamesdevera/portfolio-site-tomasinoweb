import React, { useState } from 'react'
import { facebook, linkedin, github, email, instagram } from '../assets'
import styles from '../style'

const Contacts = () => {
    const [ showPopup, setShowPopup ] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className={`mb-12 ${styles.textGradient} text-5xl font-bold`}>
            Contact Me
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-4 gap-1 w-full text-lg">
            <div className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4 cursor-pointer" 
            onClick={() => {
                navigator.clipboard.writeText("w.jamesdevera@gmail.com")
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 1000)
            }}>
                <img src={email} alt="" className='w-12'/>
                <p>Email</p>
            </div>
            <a href='https://www.linkedin.com/in/wjamesdevera/' target='_blank' className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4 cursor-pointer">
                <img src={linkedin} alt="" className='w-12'/>
                <p>LinkedIn</p>
            </a>
            <a href='https://github.com/wjamesdevera' target='_blank' className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4 cursor-pointer">
                <img src={github} alt="" className='w-12'/>
                <p>Github</p>
            </a>
            <a href='https://www.instagram.com/itsmekodyy/' target='_blank' className="flex justify-center items-center gap-3 hover:bg-white rounded-lg py-4 cursor-pointer">
                <img src={instagram} alt="" className='w-12'/>
                <p>Instagram</p>
            </a>
        </div>
        {showPopup && 
        <div className="absolute bottom-72 text-white bg-black px-3 py-1 rounded-md ">
            Copied to Clipboard
        </div> }
    </div>
  )
}

export default Contacts