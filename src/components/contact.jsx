import React, { useEffect, useRef,useState } from 'react'
import {motion, useInView } from 'framer-motion'
import Contactimg1 from '../assets/contactimg1.jpg'
import { useDispatch } from 'react-redux'
import { activateDotStyle, deactivateDotStyle } from '../redux/actions'
import emailjs from '@emailjs/browser';






export const Contact = ()=> { 
  const name = 'Contact'

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  

  //redux logic 
  const dispatch = useDispatch()
  const ref = useRef(null)
  const isInview = useInView(ref)
  

  useEffect(()=>{
    if(isInview){
      dispatch(deactivateDotStyle())
      dispatch(activateDotStyle(name)) 
    }
  },[isInview])

  //contact email 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_942bhs1', 'template_wlcy45q', form.current, 'n-rf8wlWlo78zQ20z')
      .then((result) => {
          setEmail('')
          setMessage('')
      }, (error) => {
        alert(error.text )
      });
  };

  return (
    
    <section className='flex flex-col items-center  justify-center  gap-4 md:pt-16 h-screen w-full' id = 'contact' ref = {ref}>
      <p className=' relative flex justify-center font-bold text-3xl  py-2  border-black '>Contact Me
      <div className='hidden md:block absolute w-1/3 bottom-0 bg-black h-[3px]'>  </div>
      </p>
      
     
      <div className='flex justify-center p-10 items-center sm:border-[1px] md:w-[60%] bg-gray-100 rounded-lg w-full md:shadow-2xl '>
        <motion.div
        className='flex flex-col items-center justify-center gap-6 md:gap-4 w-full   '>
          <p className='flex h-20 md:h-16 items-center text-white rounded-xl justify-center w-full md:w-[80%] bg-black text-3xl'>Get in touch</p>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-[80%] gap-3' >
          <div className='flex  text-gray-500'>
            <input 
            onChange={handleEmailChange}
            value={email}
            type='email' 
            name="user_email" 
            placeholder='email' 
            className='flex justify-start h-14 p-2 md:p-4 pl-3 w-full  outline-none rounded-md border-none bg-white'/>
          </div>
          <div className='flex text-gray-500'>
            <textarea 
            onChange={handleMessageChange}
            value={message}
            type='text' 
            name="message" 
            placeholder='message' 
            className='flex justify-center h-32 md:h-36 p-2 pl-3 w-full  outline-none rounded-md border-none bg-white'/>
          </div>
          <div className='flex text-gray-500'>
            <input 
            type='submit' 
            value="submit" 
            className='flex justify-center h-10 p-2 w-full bg-black text-white hover:cursor-pointer hover:bg-zinc-900 outline-none rounded-full border-none'/>
          </div>
          </form>
        </motion.div>
        
      </div>
    </section>
  )
}


