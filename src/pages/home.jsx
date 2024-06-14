// Imports

import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Spline from '@splinetool/react-spline';

// Components
import Navbar from '../components/Navbar';
import Description from '../components/Description';
import History from '../components/History';

// Misc
// import uOttaLogo from '/uOttaHack Logo 1.png';
import Achievemenets from '/Achievements.png';

const TITLE = "uOttaHack";
export default function Home() {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
        <link rel="icon" type="image/svg+xml" />
      </Helmet>
      <div className='w-screen h-[5000px] bg-gradient-to-b from-[#141414] via-[#1E1E1E] to-[#7A7A7A]'>
        <Navbar></Navbar>
        <div className='w-screen gap-16 h-screen justify-center flex flex-row items-center'>
          <div className='flex flex-col'>
            <h1 className='Harabara font-bold text-[128px]'>uOttaHack</h1>
            <h2 className='text-[48px] mt-[-35px] Inter'>Canada's Capital Hackathon</h2>
            <h3 className='Inter text-[24px]'>The number one place to bring your idea's to life!</h3>
            <div className='text-[16px] flex flex-row Inter'>
              <p>See More ⬇</p>
            </div>
          </div>
          <div className='w-[400px] h-[400px]'>
            <Spline scene="https://prod.spline.design/bcQou7n0OLOsxo5k/scene.splinecode" />
            {/* <img src={uOttaLogo} alt="uOtta hack Logo" /> */}
          </div>
        </div>
        <div className='w-[screen] flex flex-col justify-center items-center'>
          <div className='w-[3000px] h-[5000px] bg-[#131313] rounded-tl-full rounded-tr-full flex justify-center'>
            <div className='w-[90vw] h-screen mt-[5vw] ml-[-1vw]'>
              <img className='md:flex hidden' src={Achievemenets} alt="Achievemenets Image" />
              <Description></Description>
              <History></History>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
