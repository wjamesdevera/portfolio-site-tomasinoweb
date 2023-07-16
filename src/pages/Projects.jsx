import React from 'react'
import { ProjectCards } from '../components'
import styles from '../style'

const Projects = () => {
  return (
    <div className=''>
        <div className="flex flex-col gap-4 pt-[15%] pb-16 px-12 z-10">
            <h1 className={`text-center ${styles.textGradient} font-bold sm:text-7xl text-3xl `}>Personal Projects</h1>
        </div>
        <ProjectCards/>
    </div>
  )
}

export default Projects