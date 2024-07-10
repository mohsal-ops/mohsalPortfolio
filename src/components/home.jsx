import React, { useContext, useEffect, useRef , useState }  from 'react'
import profile from '../assets/profile.jpg'
import { Motion } from './motion'
import { motion, useInView } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { activateDotStyle, deactivateDotStyle } from '../redux/actions'
import { FaDownload } from 'react-icons/fa'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { FaLinkedin } from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { TheSelectedidINProjects } from './context'



export const Home = () => { 
  const {setSelectedId , SelectedId} = useContext(TheSelectedidINProjects)
  const width = window.innerWidth


  useEffect(()=>{
    SelectedId === '' && (
    width >= 640 ? window.scrollTo(0,1650,'smooth') : window.scrollTo(0,2250,'smooth')
  )

    

  },[])

  
  const handeleDownloadREsume = () =>{
    const resumePdfPath = `${process.env.PUBLIC_URL}/resume.pdf`;
    const link = document.createElement('a');
    link.href = resumePdfPath;
    link.download = 'resume'; // You can specify the desired filename here
    link.click()
  }

  const [Socialmedia, setSocialmedia] = useState(false)
   

  const name = 'Home'
  const dispatch = useDispatch()
  const ref = useRef(null)
  const isInview = useInView(ref )

  const SCOL = () =>{
    if(!Socialmedia){
      setSocialmedia(true)
    }else{
      setSocialmedia(false)
    }
  }

  useEffect(()=>{
    if(isInview){
      dispatch(deactivateDotStyle())
      dispatch(activateDotStyle(name)) 
    }
  },[isInview])
                          
 
  return (
    <>
    <div className=' flex relative  z-50 md:p-24 md:pl-32 bg-black  text-white  md:h-[80%] h-[115dvh]  gap-4 ' ref = {ref}>
    <div className='flex items-center justify-center hover:cursor-pointer ' >
        {!Socialmedia ?
        <button onClick={()=>{SCOL()}} className='flex absolute left-0 bg-black text-white fomt-black border-[1px] items-center justify-center rounded-r-lg h-20 w-5 hover:cursor-pointer' >
          <SlArrowRight  />
        </button> 
         :
         <div className='flex flex-col gap- absolute left-0 bg-black text-white   border-[1px]  justify-center items-center gap-7 rounded-r-lg h-52 w-8 hover:cursor-pointer animate-slide-in '>
          <a href='https://www.linkedin.com/in/mohammed-ben-salah-840a3227b/' target='_blank' rel="noopener noreferrer">
           <FaLinkedin fontSize={20}/>
         </a>
         <a  href='https://www.facebook.com/profile.php?id=100078744530384&mibextid=ZbWKwL'  target='_blank' rel="noopener noreferrer">
           <AiFillFacebook fontSize={20}/>
          </a>
         <a  href='https://wa.me/213663126792' target='_blank' rel="noopener noreferrer">
           <BsWhatsapp fontSize={20}/>
         </a>
         <button onClick={()=>{SCOL()}} className='flex absolute -right-5 bg-black text-white border-[1px]  items-center justify-center rounded-r-lg h-20 w-5 hover:cursor-pointer' >
          <SlArrowLeft fontSize={20} />
        </button>
        </div>
        }
        
      </div>
        <div className='flex md:h-full ml-8 md:space-y-14 md:mt-0 bg-black justify-center flex-col  lg:w-5/6 gap-6 md:gap-1 p-2 '>
          <div className='flex relative w-full gap-4  justify-end items-center md:hidden '>
            <div>
              <div className='absolute h-8 w-8 bg-white '></div>
              <div className='absolute h-8 w-8 bg-white bottom-0 right-0 '></div>
              {/* <div className='absolute h-8 w-8 bg-white top-0 right-0 '></div> */}
              {/* <div className='absolute h-8 w-8 bg-white bottom-0 '></div> */}
              <img className=' w-40 p-2 r grayscale' src={profile} alt='my picture' />
            </div>
            <h2 className='absolute mb-3 ml-3 text-3xl w-40 left-0 b'> <p className=' inline font-Pacifico '>M</p>ohammed Ben salah</h2>
          </div>
          <h2 className='hidden md:flex mb-3 text-3xl'> <p className=' inline font-Pacifico '>M</p>ohammed Ben salah</h2>
          <div className='flex gap-6 justify-center  items-start w-full'>
            <div className='mt-2 w-24 h-7  border-t-2  border-white  '></div>
            <p className=' text-lg'>
            Greetings! I'm a dedicated front-end developer
            with a focus on React and over a year of practical 
            experience. My true passion lies in creating elegant and intuitive user interfaces that provide 
            flawless web interactions.
            </p>             
          </div>
          <button className='flex w-full items-center gap-4 justify-center bg-neutral-500 h-7 md:h-10 md:w-[40%] text-white rounded-xl hover:bg-black mt-10 duration-300' onClick={handeleDownloadREsume}>
              <FaDownload fontSize={15}  className='text-white'/> 
            My Resume
          </button>
        </div>
      <Motion imageDiv >
        <div className='hidden lg:flex justify-center h-340 '>
          <div className='h-72 flex justify-center items-center relative z-40 mt-7'>
            <img className='z-30 h-72 rounded-sm border-zinc-500 grayscale' src={profile} alt='my picture' />
            <motion.div 
              className='z-10 h-28 bg-gradient-to-l from-gray-200 to-black w-48 absolute -bottom-14 border-black border-1 rounded-br-full -left-14 '
              variants = {{
                hidden : {opacity : 0 , x: -75 },
                visible : {opacity : 1 , x: 0}
              }}
              initial = 'hidden'
              animate = 'visible'
              transition={{duration: 0.5 , delay:0.25}}
          
            ></motion.div>
            <motion.div 
              className='z-10 h-28 absolute bg-gradient-to-r from-gray-200  to-black w-48 -top-14 border-black border-1 -right-14 rounded-l-full'
              variants = {{
                hidden : {opacity : 0 , x: 75 },
                visible : {opacity : 1 , x: 0}
              }}
              initial = 'hidden'
              animate = 'visible'
              transition={{duration: 0.5 , delay:0.25}}
              ></motion.div>
          </div>
        </div>
      </Motion>
    </div>
    </>
  )
}


