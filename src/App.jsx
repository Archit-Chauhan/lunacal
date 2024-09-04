import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import ImageSection from './components/ImageSection'

const App = () => {
  return (
    <div className=' h-[100vh] bg-gradient-to-br from-[#373E44] to-[#191B1F] flex'>
      <div className='w-[50%]'></div>
      <div className='flex w-[50%] h-full flex-col  justify-around'>
        <About/>
        <ImageSection/>
      </div>
    </div>
  )
}

export default App
