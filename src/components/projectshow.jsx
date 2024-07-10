import React , {useContext, useState } from 'react'
import axios from 'axios'

import { projects } from '../lib/data'
import {motion  } from 'framer-motion'
import { TheSelectedidINProjects } from './context'
import { BiLinkAlt } from 'react-icons/bi'

export const Projectshow = ( ) => {
    const {SelectedId , setSelectedId} = useContext(TheSelectedidINProjects)
    const afterClickDivStyles = 'flex  flex-col text-center md:h-[420px]  rounded-md sm:w-2/3 md:w-[60%] w-[90%] md:mx-4 shadow-xl border-gray-300 border-opacity-60  border-[1px] justify-between items-center text-gray-400 '
  return (
    <div className='flex justify-center  items-center h-screen '  
    onClick={()=>{
        setSelectedId('')
        console.log(SelectedId)
    }}>
    <motion.div 
        className='flex justify-center pt-4 md:pt-0 rounded-lg '
        variants = {{
            hidden : {opacity : 0 , x: 25 },
            visible : {opacity : 1 , x: 0}
            }}
            initial ="hidden "
            animate = 'visible'
            transition = {{duration:0.5 }}
        >
            {projects.map((child,index)=>(
              SelectedId === child.id &&
                <motion.div
                  key={index}
                  className={afterClickDivStyles}
                >
                    
                    <div className='w-full h-[300px] overflow-hidden rounded-t-md flex items-center justify-center ' >
                      <img src={child.image} alt='project' />
                    </div>
                    <div className='flex flex-col p-3  gap-1 bg-black  w-full rounded-b-lg overflow-auto'>
                        <div className='flex justify-center bg-black  w-full'>
                          <a 
                           className='w-fit opacity-75 text-bold bg-black shadow-md text-gray-400 hover:shadow-md hover:text-white  p-1 pl-4 pr-4 rounded-full flex items-center gap-2 '
                           href={child.link}
                           target='_blank'
                          >
                            <BiLinkAlt fontSize={25} className='bg-black text-white'/>
                            {child.link.length > 20 ? child.link.slice(8,20) + '...': child.link.slice(8) + '...'}
                        </a>  
                        </div>
                      <h2 className='text-xl bg-black '>{child.name}</h2>
                      <p className=' p-2 bg-black' >{child.description}</p>
                    </div>
                
              </motion.div>
              ))}
      </motion.div>
      </div>
  )
}



































function EditPet({ petToEdit }) {

    const [petName, setPetName] = useState(petToEdit?.name)
    const [petType, setPetType] = useState(petToEdit?.type)
    const [petAge, setPetAge] = useState(petToEdit?.age)
    const [petBreed, setPetBreed] = useState(petToEdit?.breed)

    const editPet = async () => {
        try {
            const petData = {
                id: petToEdit.id,
                name: petName,
                type: petType,
                age: petAge,
                breed: petBreed
            }

            /* FETCH */
            // const response = await fetch(`http://localhost:3000/pets/${petToEdit.id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(petData)
            // })

            /* AXIOS */
            const response = await axios.put(
                `http://localhost:3000/pets/${petToEdit.id}`,
                petData,
                { headers: { 'Content-Type': 'application/json' } }
            )
            
            if (response.status === 200) {
                window.location.href = `/${petToEdit.id}`
            }
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Edit Pet</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet name</label>
                <input type='text' value={petName} onChange={e => setPetName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet type</label>
                <input type='text' value={petType} onChange={e => setPetType(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet age</label>
                <input type='text' value={petAge} onChange={e => setPetAge(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet breed</label>
                <input type='text' value={petBreed} onChange={e => setPetBreed(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => editPet()}
            >
                Save changes
            </button>
        </div>
    )
}

export default EditPet





