import React from 'react'
import flag from "../assets/flag.png"
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className=" bg-back flex  flex-col justify-center">
        
        <div className="flex flex-col "> 
        <div className='flex justify-center mt-20 mx-20'>
            <img  classname="" src = {flag} width={250}/>
        </div>

            <h1 className="font-bold text-4xl mt-5 mx-5 p-4 text-center ">French  video  with English subtitles</h1>
            <p className=" text-gray-500 mb-5 mx-20 p-4">Want your videos to reach a wider audience who speaks English? This service is ideal for your audiovisual content - from online videos, television shows, films, documentaries, marketing content and more!</p>
        </div>
      < div className="flex  flex-col m-auto">
            <Link to="/submit" role='button' className="text-center h-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" title="Go to Sign Up" id="banner-cta">
                Get Started
            </Link>

            <div className="flex m-auto mt-7">
                <img alt="G2 2023 Leader Award" className="w-20 md:w-24" src="https://www.happyscribe.com/assets/landing/g2-leader-award-a392a31dcceba7fa195d3c4919e3fe1ce2c9ec91ee08ccd4b0a6c553a4f6f0b8.svg" />
                <img alt="G2 2023 Momentum Leader Award" className="w-20 md:w-24" src="https://www.happyscribe.com/assets/landing/g2-momentum-leader-award-5e76b21f9f89b72e7c4f247221e7515bc47f71029cb06ddc2c3a01a602c5153f.svg" />
            </div>

          <div className="hs-banner-rating">

            <div className="hs-font-positive base stars"  aria-label="Rated &lt;b&gt;4.8/5&lt;/b&gt; based on 850+ reviews"></div>
            <div className="hs-font-positive small-base">Rated <b>4.8/5</b> based on 850+ reviews</div>
          </div>
      </div>

      <picture><source type="image/webp" srcset="https://www.happyscribe.com/assets/landing/illustrations/banner-right-54a90ad37b7a569f6e21013f87cfe181652baad2c4fd5041303f1f1c983ea203.webp"></source><source type="image/jpg" srcset="https://www.happyscribe.com/assets/landing/illustrations/banner-right-b129c8f71a26d1e7652f54dba0a1390c72e8a44b43629eab5275a485e0a7e9cc.jpg"></source><img alt="Illustration" className="hidden lg:block" src="https://www.happyscribe.com/assets/landing/illustrations/banner-right-b129c8f71a26d1e7652f54dba0a1390c72e8a44b43629eab5275a485e0a7e9cc.jpg" /></picture>
  </div>
  )
}

export default Home
{/* <button className="h-25 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" title="Go to Sign Up" id="banner-cta"> */}
{/* </button> */}

