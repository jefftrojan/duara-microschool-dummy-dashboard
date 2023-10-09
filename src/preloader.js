import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from './animate'
import logo from './duara-doodle.png'
function PreLoader() {
    useEffect(() => { 
        preLoaderAnim()

    }, [] )
  return (
    <div className='preloader'>
        <div className='texts-container'>
            <img src={logo} alt='logo' width={350} height={250} />

            

        </div>
        <h2> <em>Duara Microschool Dashboard</em> </h2>
    </div>
  )
}

export default PreLoader