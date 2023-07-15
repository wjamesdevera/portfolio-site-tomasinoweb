import React from 'react'
import { ProjectCards } from '../components'
import styles from '../style'

const Projects = () => {
  return (
    <div className=''>
        <div className="">
            <h1 className={`text-center ${styles.textGradient} font-bold sm:text-7xl text-3xl `}>Personal Projects</h1>
        </div>
        <ProjectCards/>
    </div>
  )
}

export default Projects