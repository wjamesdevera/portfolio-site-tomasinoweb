import {useState } from 'react'

import { profile } from '../assets'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav
        className='fixed left-0 top-[32px] right-0 bottom-[auto] z-20 max-w-[1200px] sm:px-32 px-12 flex justify-between items-center mx-auto'
        >
            <a href="/">
                <img src={profile} alt="profile" className='rounded-circle img-fluid w-14 drop-shadow-lg hover:translate-y-[-1px] hover:shadow-lg'/>
            </a>
            <div className="flex flex-col items-end">
                <div className="rounded-full border-secondary w-14 h-14 drop-shadow-lg bg-white hover:translate-y-[-1px] hover:shadow-lg" onClick={() => setToggle((prev) => !prev)}>
                    <div className={`${toggle ? 'on' : ''}`} id='toggle'>
                        <span className='w-14 h-14'></span>
                    </div>
                </div>
            </div>
            <div className={`bg-white rounded-2xl drop-shadow-lg px-2 py-2 absolute right-32 top-16 transition-transform duration-150 ${toggle ? "pop-up-visible" : "pop-up"} hover:translate-x-px hover:translate-y-[-1px] hover:shadow-lg`}>
                <ul className='sm:w-[250px] text-lg flex flex-col gap-2 opacity-75 font-medium'>
                    {navLinks.map(nav => (
                        <li className='hover:bg-neutral-200 w-full text-lg rounded-lg py-2 px-4' key={nav.id}>
                            <a href={`${nav.link}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar