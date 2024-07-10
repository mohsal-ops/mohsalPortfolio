import React ,{ useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {Motion } from '../components/motion'

import {skillsarray} from '../lib/data'
import { activateDotStyle, deactivateDotStyle } from '../redux/actions'
import { useDispatch } from 'react-redux'

export const Skills = ()=> {
  const dispatch = useDispatch()
  const name = 'Skills'
  const divStyle ={
    className : 'flex flex-col rounded-2xl shadow-xl justify-evenly items-center h-[160px] duration-500  transform hover:scale-105 transition-transform'
  }

  const ref = useRef(null)
  const isInview = useInView(ref )
  

  useEffect(()=>{
    if(isInview){
      dispatch(deactivateDotStyle())
      dispatch(activateDotStyle(name)) 
    }
  },[isInview])
  
  
  return (
    <section ref = {ref} id="skills" className='flex  flex-col gap-12 items-center md:p-24 p-10 md:scroll-mt-2 scroll-mt-7 ' >
      <motion.p 
      initial = {{opacity : 0 , x:75 }} 
      animate = {{opacity : 1 , x:0}} 
      transition = {{duration:0.5 , delay : 0.175}}
      className='font-bold text-3xl flex justify-center py-3 relative'
      >Skills
      <div className='hidden md:block absolute w-1/3 bottom-0 bg-black h-[3px]'> </div>
      </motion.p>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 relative '>
        {skillsarray.map((skill)=>{
          return(
          <Motion skillsSection={true}>
          <div className={divStyle.className}>
            <img src={skill.hash} alt={skill.name}  className={ skill.className}/>
            <p className='flex flex-col text-center mx-2'>
              <h3>{skill.name}</h3>
              <p className='text-sm '>{skill.experiance}</p>
            </p>
          </div>
          </Motion>)
        })}
      </div>
    </section>    
    )}
    