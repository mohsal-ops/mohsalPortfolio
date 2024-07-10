import React , {useEffect, useRef , useContext } from 'react'
import {motion , useInView , useAnimation } from 'framer-motion'
import { TheSelectedidINProjects } from './context'
import { projects } from '../lib/data'




export const Motion = ({children, imageDiv , skillsSection  }) => {
  
  const imageDivStyle = {
    width : '100%',
    marginTop:'50px',
  }

   
  const ref = useRef(null)
  const isInview = useInView(ref , {once : true })
  const mainControls = useAnimation()

  useEffect(()=>{
    if(isInview){
      mainControls.start('visible')
    }
  },[isInview])

  
  if(skillsSection) return (
    <div ref = {ref}  >
        <motion.div
        ref = {ref}
        variants = { {
            hidden : {opacity : 0 ,x : 10 },
            visible : {opacity : 1 ,x : 0}
        }}
        initial = "hidden"
        animate = {mainControls}
        transition = {{duration:0.5 , delay:0.25}}
        >
          {children}
        </motion.div>
    </div>
  )
 
  else{
    return(
      <div ref = {ref} style={ imageDiv ? imageDivStyle : {position : 'relative'}} >
        <motion.div
        ref = {ref}
        variants = {imageDiv ? {
            hidden : {opacity : 0 ,x : 50},
            visible : {opacity : 1 ,x : 0}
        }:
        {
            hidden : {opacity : 0 , x: 25 },
            visible : {opacity : 1 , x: 0}
          }}
        initial = "hidden"
        animate = {mainControls}
        transition = {{duration:0.5 , delay:0.25}}
        className='flex items-center justify-center   '
        >
          {children}
        </motion.div>
    </div>
    )

  }
}
