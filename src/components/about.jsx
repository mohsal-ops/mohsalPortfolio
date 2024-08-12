import React ,{ useEffect, useRef } from 'react'
import { motion , useInView, useAnimation  } from 'framer-motion'
import { connect, useDispatch  } from 'react-redux'
import {activateDotStyle , deactivateDotStyle} from '../redux/actions'


export const About = ()=> { 
  const name = 'About'

  
  
  //redux logic 
  const dispatch = useDispatch()


  const ref = useRef(null)
  const isInview = useInView(ref)

  const mainControls = useAnimation()

  useEffect(()=>{
    if(isInview){
      mainControls.start('visible')
      dispatch(deactivateDotStyle())
      dispatch(activateDotStyle(name)) 
      
      
    }
  },[isInview])
 
 
  return (
    <section 
    className=' mt-28 md:mt-10 lg:gap-2 flex flex-col items-center content-evenly justify-center md:scroll-mt-20 scroll-mt-16' 
    ref = {ref}
    id = "about"
    >
      <motion.p variants={{hidden : {opacity : 0 , x : 75} , visible : {opacity : 1 , x : 0}}} initial='hidden' animate = {mainControls} transition={{duration: 0.5, delay:0.175}} className='flex items-center justify-center text-3xl font-black py-3 relative '>
         About Me
         <div className='hidden md:block absolute w-1/3 bottom-0 bg-black h-[3px]'> </div>
       </motion.p>
      <div className='flex lg:w-[60%] w-full font-bold items-center  '>
        <p className='flex flex-col text-lg text-gray-700 font-bold p-10 mr-3 w-full gap-3'>
          <motion.p variants={{hidden : {opacity : 0 , x : -75} , visible : {opacity : 1 , x : 0}}} initial='hidden' animate = {mainControls} transition={{duration: 0.5, delay:0.175}} >          
            Hi, I'm Mohammed Ben, an enthusiastic front-end developer specializing in React and Next js with 2+ year of hands-on experience.
          </motion.p>
          <motion.p variants={{hidden : {opacity : 0 , x : 75} , visible : {opacity : 1 , x : 0}}} initial='hidden' animate = {mainControls} transition={{duration: 0.5, delay:0.175}}>
            I'm passionate about crafting sleek and user-friendly interfaces that deliver seamless web experiences.
          </motion.p>
          <motion.p variants={{hidden : {opacity : 0 , x : -75} , visible : {opacity : 1 , x : 0}}} initial='hidden' animate = {mainControls} transition={{duration: 0.5, delay:0.175 }}>
            My journey as a web developer in the world of Next js has been an exciting learning adventure. I'm dedicated to continuous growth and thrive on every coding challenge I encounter.
          </motion.p>
          <motion.p variants={{hidden : {opacity : 0 , x : 75} , visible : {opacity : 1 , x : 0}}} initial='hidden' animate = {mainControls} transition={{duration: 0.5, delay:0.175}}>
            With a commitment to honing my skills and finding elegant solutions, I'm excited to contribute to the success of your web projects.

          </motion.p>
          <motion.p variants={{hidden : {opacity : 0 , x : -75} , visible : {opacity : 1 , x : 0}}} initial='hidden' animate = {mainControls} transition={{duration: 0.5, delay:0.175}}>
          Let's collaborate to create something amazing!
          </motion.p>
        </p>
      </div> 
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    activeSection: state.activeSection,
  };
};

const mapDispatchToProps = {
  activateDotStyle, // Map the action creator to props
};

export default connect(mapStateToProps, mapDispatchToProps)(About);








