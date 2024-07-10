import {useState,useContext} from 'react'
import './App.css';
import {Projects} from './components/projects'
import {About} from './components/about'
import {Contact} from './components/contact'
import {Navbar } from './components/navbar'
import { Home } from './components/home'
import {Skills} from './components/skills'
import {TheSelectedidINProjects} from './components/context'
import { Projectshow } from './components/projectshow';

function App() { 
  const { SelectedId, setSelectedId } = useContext(TheSelectedidINProjects)
  console.log(SelectedId)

  return (  
  <div className="App bg-[#e6e5e0] ">
   {SelectedId !=='' && SelectedId !== null ? 
    <Projectshow id = {SelectedId && setSelectedId} />
   :
   <>

    <div className='flex bg-black justify-center relative'>
      <Navbar/>
    </div> 
    <Home id="Home"/>
    <About id="About"/>
    <Skills id="Skills" />
    <Projects id="Projects"/>
    <Contact id="Contact"/>
    
    </> 
    
}    
  </div> 
  );
}

export default App;
