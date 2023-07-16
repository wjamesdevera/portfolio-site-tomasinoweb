import React from 'react'
import styles from '../style'

const About = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="text-md sm:px-0 px-12">
        <h1 className={`sm:text-5xl text-3xl ${styles.textGradient} font-bold sm:mt-[25%] mt-[35%] mb-10`}>About me</h1>
        <p className='mb-6'>
          I am currently a student at the 
          <a href="https://www.ust.edu.ph/the-university/" target='_blank' className='font-semibold'> University of Santo Tomas</a>
          , pursuing a Bachelor of Science in Information and Technology. 
        </p>
        <p className='mb-6'>
          I have hands-on experience with various technologies, including:
        </p>
        <ul className='list-disc px-4 mb-6'>
          <li>Javascript ES6+</li>
          <li>Python</li>
          <li>Java</li>
          <li>HTML & CSS</li>
        </ul>
        <p className='mb-72'>
          Outside of my studies, I have a passion for music and enjoy playing video games in my free time.
        </p>
      </div>
    </div>
  )
}

export default About