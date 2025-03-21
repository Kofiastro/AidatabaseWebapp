import { useState } from 'react'
import Navbar from './components/Navbar'
import Options from './components/Options'
import Entry from './components/Entry'
import WelcomeScreen from './components/WelcomeScreen'
import NewProject from './components/NewProject'
import './App.css'


function App() {


  return (
    <>
    <Navbar/>
    {/* <Options/> */}
    {/* <WelcomeScreen/> */}
    <NewProject/>
    <Entry/>

    
       
    </>
  )
}

export default App
