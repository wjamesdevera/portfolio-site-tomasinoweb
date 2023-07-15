import React from 'react'
import styles from '../style'
import { featured_project } from '../assets'

const FeaturedProject = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <a href='' className=" bg-slate-200 rounded-xl w-full hover:translate-y-[-2px] hover:shadow-md overflow-hidden hover:text-neutral-600 mb-8">
        <div className="flex flex-col-reverse sm:flex-row text-none hover:text">
          <div className="my-8 mx-4">
            <div className="text-center my-4">
              <h1 className={`text-2xl font-bold ${styles.textGradient}`}>Special Project</h1>
            </div>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis vel dicta reprehenderit eius eaque animi voluptate corporis maiores architecto ullam culpa, atque hic quos eligendi veritatis iure at temporibus?
            </p>
            <button type='button' className='rounded-md border-2 text-xl py-2 px-5 my-4 bg-gray-100 hover:border-white hover:bg-inherit flex items-center gap-3 hover:text-white'>
              Visit Site
            </button>
          </div>
          <a href="" className={`flex items-center overflow-hidden`}>
            <img src={featured_project} alt="" className='scale-[200%] hover:scale-[210%]'/>
          </a>
        </div>
      </a>
    </div>
  )
}

export default FeaturedProject