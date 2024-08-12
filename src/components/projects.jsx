import React, {useEffect,useContext, useRef, useState} from 'react'
import {motion, useInView, useAnimation } from 'framer-motion'

import {BiLink} from 'react-icons/bi'
import {projects} from '../lib/data'
import {TheSelectedidINProjects } from './context'
import { useDispatch } from 'react-redux'
import { activateDotStyle, deactivateDotStyle } from '../redux/actions'
import { SlArrowRight } from 'react-icons/sl'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'


export const Projects = () => {

  const {setSelectedId , SelectedId} = useContext(TheSelectedidINProjects)
  const dispatch = useDispatch()
  const name = 'Projects'
  const ref = useRef(null)
  const Inview = useInView(ref)
  const mainControls = useAnimation()
  
  const [loading, setLoading] = useState(true);
  const [showMoreStatus, setshowMoreStatus] = useState(true);
  console.log(showMoreStatus)

  const loaderProps = {
    loading,
    size: 15,
    duration: 2,
    colors: ['#2c6e49','#2c6e49']
  }
  useEffect(()=>{
    if(Inview){
      mainControls.start("visible")
      dispatch(deactivateDotStyle())
      dispatch(activateDotStyle(name)) 
    }
  }, [showMoreStatus,Inview])
  
   
  
  const beforeClickDivStyles='flex flex-col bg-white  relative rounded-2xl shadow-xl justify-between  h-screen w-full '
  return (
    <div className=' flex gap w-full flex-col justify-center items-center mb-7 scroll-mt-24  ' >
    <section 
    id = "projects"
    ref={ref}
    className='flex md:gap-14 gap-10 flex-col justify-center items-center scroll-mt-16'
    
    >
        <motion.p
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.175 }}
          className='font-bold text-3xl flex justify-center py-3 relative'
        >Projects
          <div className='hidden md:block absolute w-1/3 bottom-0 bg-black h-[3px]'> </div>
        </motion.p>

      <div className='grid md:grid-cols-3 px-4 w-full  sm:grid-cols-2 grid-cols-1  gap-10 relative mx-14 hover:cursor-pointer '>
        {showMoreStatus ? projects.slice(0,3).map((item , index)=>(
          <motion.div 
          variants={{
          hidden : {opacity : 0 , y : 30},
          visible : {opacity : 1 , y : 0}
          }}
          initial = 'hidden'
          animate = {mainControls}
          transition={{duration : 0.5 }}
            className={beforeClickDivStyles} 
            key={index}
          >
            <div className='h-1/2 sm:p-16 p-12 flex items-center w-full bg-top  overflow-hidden rounded-md '>
              <img src={item.image} alt='project image' className='bg-bottom   f  sm:p-0 '/>
            </div>
            
            <div className='flex h-1/2 overflow-auto pl-10 p-4 flex-col justify-evenly '>
              <p className='font-medium text-green-800  mb-2' >{item.technologies}</p>
              <p className=' text-xl font-semibold '>{item.name}</p>
              <p className='text-md'>{item.description}</p>
            </div>
            <div className='flex px-10 pb-10 justify-cente  w-full'>
              <a
                href={item.link}
                className='flex items-center gap-5 hover:gap-3 hover:duration-300 hover:ease-linear'
                target='_blank'
              >
                <BiLink className='text-green-800'/>
                <p className='font-medium text-xl'>See the demo</p>
                <SlArrowRight className='text-green-800' />
              </a>
            </div>
          </motion.div>      
        )) : projects.slice(0,projects.length).map((item, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.5 }}
            className={beforeClickDivStyles}
            key={index}
          >
            <div className='h-1/2 sm:p-16 p-12 flex items-center w-full bg-top  overflow-hidden rounded-md '>
              <img src={item.image} alt='project image' className='bg-bottom   f  sm:p-0 ' />
            </div>

            <div className='flex h-1/2 overflow-auto pl-10 p-4 flex-col justify-evenly '>
              <p className='font-medium text-green-800  mb-2' >{item.technologies}</p>
              <p className=' text-xl font-semibold '>{item.name}</p>
              <p className='text-md'>{item.description}</p>
            </div>
            <div className='flex px-10 pb-10 justify-cente  w-full'>
              <a
                href={item.link}
                className='flex items-center gap-5 hover:gap-3 hover:duration-300 hover:ease-linear'
                target='_blank'
              >
                <BiLink className='text-green-800' />
                <p className='font-medium text-xl'>See the demo</p>
                <SlArrowRight className='text-green-800' />
              </a>
            </div>
          </motion.div>
        )) }
      </div>   
      </section>
      <div className='flex w-full justify-center group'>
        <button onClick={() => {
          
          setshowMoreStatus((prev) => !prev)
        }} className='border-2 border-green-800 flex shadow-md gap-4 p-3 px-8 mt-7 items-center justify-center rounded-full  bg-neutral-100 h0 hover:bg-black hover:text-white hover:duration-300 '>
          {showMoreStatus ? (
            <>
              <p>Show More</p>
              < FaLongArrowAltDown className=' transition-transform ease-in-out duration-500 group-hover:translate-y-1'/>
            </>
            
          ) : (
              <>
              <p>Show Less</p>
                <FaLongArrowAltUp className=' transition-transform ease-in-out duration-500 group-hover:-translate-y-1'/>
              </>
          )}
        </button>
      </div>
    </div>
  )
}

