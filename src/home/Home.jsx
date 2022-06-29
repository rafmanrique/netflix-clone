import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <img
        width="100%"
        src="http://cdn26.us1.fansshare.com/photo/inglouriousbasterds/inglourious-basterds-hd-wallpapers-wallpaper-38402767.jpg" 
        alt="" />
    </div>
  )
}

export default Home