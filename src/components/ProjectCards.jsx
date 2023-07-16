import React from 'react'
import { github } from '../assets'

const ProjectCards = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="sm:grid sm:grid-cols-3 flex flex-col gap-4 w-full mb-12">

        <div className="rounded-xl border-none hover:drop-shadow-md hover:-translate-y-1 card h-80 hover:text-neutral-600 py-3 px-3">
          <div className="flex justify-between items-center">
            <div className="">
              <img src="https://api.iconify.design/ic:sharp-folder-open.svg" alt="" className='w-8' />
            </div>
            <div className="flex justify-center items-center gap-2">
              <a href="https://github.com/wjamesdevera/calculator-app" target='_blank'>
                <img src={github} alt="" className='w-6'/>
              </a>
              <a href="https://wjamesdevera.github.io/calculator-app/" target='_blank'>
                <img src="https://api.iconify.design/material-symbols:ios-share-rounded.svg" alt="" className='w-6'/>
              </a>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title font-semibold">
              Calculator App
            </h5>
            <p className='card-text'>
              A hands-on project from the Odin Project
            </p>
          </div>
        </div>

        <div className="rounded-xl border-none hover:drop-shadow-md hover:-translate-y-1 card h-80 hover:text-neutral-600 py-3 px-3">
          <div className="flex justify-between items-center">
            <div className="">
              <img src="https://api.iconify.design/ic:sharp-folder-open.svg" alt="" className='w-8' />
            </div>
            <div className="flex justify-center items-center gap-2">
              <a href="https://github.com/wjamesdevera/sketch-it" target='_blank'>
                <img src={github} alt="" className='w-6'/>
              </a>
              <a href="https://wjamesdevera.github.io/sketch-it/" target='_blank'>
                <img src="https://api.iconify.design/material-symbols:ios-share-rounded.svg" alt="" className='w-6'/>
              </a>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title font-semibold">
              Sketch-it!
            </h5>
            <p className='card-text'>
              A hands-on project from the Odin Project
            </p>
          </div>
        </div>

        <div className="rounded-xl border-none hover:drop-shadow-md hover:-translate-y-1 card h-80 hover:text-neutral-600 py-3 px-3">
          <div className="flex justify-between items-center">
            <div className="">
              <img src="https://api.iconify.design/ic:sharp-folder-open.svg" alt="" className='w-8' />
            </div>
            <div className="flex justify-center items-center gap-2">
              <a href="https://github.com/wjamesdevera/rock-paper-scissors" target='_blank'>
                <img src={github} alt="" className='w-6'/>
              </a>
              <a href="https://wjamesdevera.github.io/rock-paper-scissors/" target='_blank'>
                <img src="https://api.iconify.design/material-symbols:ios-share-rounded.svg" alt="" className='w-6'/>
              </a>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title font-semibold">
              Rock, Paper, Scissors!
            </h5>
            <p className='card-text'>
              A hands-on project from the Odin Project
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCards