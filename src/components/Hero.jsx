import React from 'react'

import { heroTexts } from '../constants'
import { postal } from '../assets'
import styles from '../style'

const Hero = () => {
  return (
    <div className='text-center vh-75 w-full flex justify-center items-center'>
      <div className="flex flex-col gap-4 pt-[25%] pb-16 px-12 z-10">
        {heroTexts.filter(text => (text.id == "welcome")).map(text => 
          <h1 key={text.id} className={`font-bold sm:text-7xl text-3xl ${styles.textGradient}`}>
            {text.title}
          </h1>
        )}
        <div className="flex justify-center gap-2 items-center">
          <img src={postal} alt="postal" className={`h-5 ${styles.textGradient}`}/>
          {heroTexts.filter(text => (text.id == "location")).map(text => 
            <h1 key={text.id} className={`font-bold sm:text-lg text-md ${styles.textGradient}`} >
              {text.title}
            </h1>
          )}
        </div>
        {heroTexts.filter(text => (text.id == "message")).map(text => 
          <h1 key={text.id} className='sm:text-lg text-md text-neutral-600'>
            {text.title}
          </h1>
        )}
      </div>
    </div>
  )
}

export default Hero