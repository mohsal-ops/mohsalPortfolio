import React , {useContext} from 'react'
import { links } from '../lib/data';
import { useSelector } from 'react-redux';

export const NavigationDots = () => {
  const dotStyle = {
    background: 'white',
  }


  const currentSection = useSelector((state)=>state.activeSection)
  
  return (
    <>
    <div className='flex justify-center items-center flex-col gap-5 '>
        {links.map((item)=>(
                <a
                key = {item}
                href ={`#${item.hash}`}
                className='flex rounded-full h-3 w-3 outline-none border-[1.5px] border-white'
                style={currentSection === item.name ? dotStyle : {}}
                >
                </a>
        ))       
       }
    </div>
    </>
  )
}
