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
import {BsGithub, BsWhatsapp} from 'react-icons/bs'
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
      <div className=' flex justify-center items-center relativ  z-50 md:p-24 md:h-screen  gap-4 ' ref={ref}>
    <div className='flex items-center justify-center hover:cursor-pointer ' >
        {!Socialmedia ?
            <button onClick={() => { SCOL() }} className='flex absolute left-0 shadow-xl md:bg-black md:text-white bg-white text-black border-[1px] items-center justify-center rounded-r-lg h-20 w-5 hover:cursor-pointer' >
          <SlArrowRight  />
        </button> 
         :
            <div className='flex flex-col absolute left-0 bg-white border-[1px]  justify-center items-center gap-7 rounded-r-lg h-52 w-8 hover:cursor-pointer animate-slide-in shadow-xl'>
          <a href='https://www.linkedin.com/in/mohammed-ben-salah-840a3227b/' target='_blank' rel="noopener noreferrer">
                <FaLinkedin className='text-black' fontSize={20}/>
         </a>
         <a  href='https://www.facebook.com/profile.php?id=100078744530384&mibextid=ZbWKwL'  target='_blank' rel="noopener noreferrer ">
                <AiFillFacebook className='text-black' fontSize={20}/>
          </a>
         <a  href='https://wa.me/213663126792' target='_blank' rel="noopener noreferrer">
                <BsWhatsapp className='text-black' fontSize={20}/>
              </a>
              <a href='https://github.com/mohsal-ops' target='_blank' rel="noopener noreferrer">
                <BsGithub className='text-black' fontSize={20} />
              </a>
              <button onClick={() => { SCOL() }} className='flex md:bg-black md:text-white text-black absolute bg-white -right-5 border-[1px]  items-center justify-center rounded-r-lg h-20 w-5 hover:cursor-pointer' >
          <SlArrowLeft fontSize={20} />
        </button>
        </div>
        }
        
      </div>
        <div className='flex items-center md:h-full mr-5 justify-center md:items-center md:space-y-6 md:mt-0  mt-32 flex-col md:justify-between md:flex-row md:w-4/5 gap-6  '>
          <div >
          <img className='border-4 object-top border-green-700 md:w-52 md:h-52 h-36 w-36 object-cover rounded-full ' src={profile} alt='my picture' />  
          </div>
          <div className='flex flex-col gap-4 items-center justify-center md:w-2/3  lg:items-start '>
            <p className='md:  inline text-3xl font-semibold '>Hi! it's Mohammed  </p>
            <h2 className='text-green-700 mb-3 text-center text-xl md:text-3xl font-semibold bg-blac'>FullStack | Frontend Web developer </h2>
            <p className=' text-md text-center md:text-start'>
            Greetings! I'm a dedicated front-end web developer
            with a focus on React and Next js with over 2 years of practical 
            experience. 
            </p> 
            <button className='flex w-full items-center gap-4 justify-center bg-black h-10 md:h-10 md:w-[40%] text-white rounded-xl hover:bg-zinc-800 mt-10 duration-300' onClick={handeleDownloadREsume}>
              <FaDownload fontSize={15} className='text-white' />
              My Resume
            </button>
          </div>
          
        </div>

    </div>
    </>
  )
}


