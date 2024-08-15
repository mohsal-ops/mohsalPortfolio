import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { links } from '../lib/data';
import  {AiOutlineMenu}  from 'react-icons/ai'
import { TfiClose } from "react-icons/tfi"; import { useSelector } from 'react-redux';



export const Navbar = () => {
  const [sidemenue ,setsidemenue ] = useState(false)
  const currentSection = useSelector((state)=>state.activeSection)



  return (
      <div className='flex border-b-[1px] md:border-none  w-full lg:w-[80%] z-[990] md:rounded-full shadow-lg md:bg-black md:text-white bg-white text-black justify-between  items-center h-16 md:mt-3 fixed '>
            <span className='flex w-1/3 h-full rounded-full pl-9 justify-start items-center md:pl-14  text- text-2xl'>
              <Link to='/' className='  '>  
                <p className='inline font-Pacifico'>P</p>ortfolio
              </Link>
            </span>
            <nav className='hidden sm:block md:rounded-full   h-full md:pr-10 w-2/3'>
              <ul className='flex justify-between items-center h-full px-14 w-full'>
                {links.map((item)=>(
                  <li
                  key={item.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={currentSection === item.name && 'flex h-[80%] items-center border-b-2 md:border-white border-gray-600 '}
                  >
                    <a href ={`#${item.hash}` }className='hover:text-gray-600 '> {item.name} </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='flex items-center justify-center sm:hidden  mr-2 h-full cursor-pointer '>
        {sidemenue ? (
          
          <div className='absolute right-0 top-0  w-3/5 h-screen z-[999] overflow-y-auto shadow-md bg-white text-black animate-slide-in-right  '>
            <div className='flex items-center relative h-12 text-black pt-2 mr-2' onClick={() => { setsidemenue(false) }} >
              <TfiClose className='absolute right-0 text-4xl p-1 hover:bg-gray-100 rounded-full' />
            </div>
            <ul className='flex relative flex-col  sm:justify-between justify-start  sm:flex-row  px-14'>
              {links.map((item)=>(
                <li
                key={item.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='flex justify-center items-center w-[100%] border-b-[1px] h-14 text-xl'
                >
                  <a href ={item.hash } className=' hover:text-gray-600 hover:duration-300' onClick={()=>{setsidemenue(false)}}> {item.name} </a>
                </li>
              ))}
            </ul>

            </div>
              
              
            ):(
               <AiOutlineMenu  fontSize={35}   onClick={()=>{setsidemenue(true)}}/>
              )
            }
            </div>
           
      </div>
  );
};
