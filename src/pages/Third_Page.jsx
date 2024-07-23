import React from 'react'
import Hand from '../assets/Hand_1.svg'
import Arrow from '../assets/Arrow.svg';
import arrow from '../assets/Arrow_2.svg';

const Third_Page = () => {
  return (
    <div className='h-screen w-screen bg-custom-grey items-center justify-center overflow-hidden'>
        <div className=' items-center flex justify-center'>
            <div className='h-[600px] w-[600px] rounded-full bg-white translate-y-20 translate-x-7 shadow-2xl'>
                <img src={Hand} alt='hand' className='h-[570px] -translate-x-44 translate-y-20' />
            </div>
        </div>
            <img src={Arrow} alt='hand' className='translate-x-[1050px] -translate-y-[300px]'/>
            <img src={arrow} alt='hand' className='-translate-y-[600px] translate-x-[350px] '/>
        <div className='translate-x-[1150px] -translate-y-[400px]'>
            <p className='text-black font-bold -translate-y-[400px] underline font-font-geo translate-x-10 text-4xl'>5-20%</p>
            <p className='text-black font-bold -translate-y-[400px] underline translate-x-10 font-font-geo text-4xl'> TodayOff</p>
            <p className='text-black w-56 font-bold text-lg translate-x-20 -translate-y-[150px]'>simple water bottel made of steel categorized by minimalessential design denied by soft line and enhanced by the surface of the material</p>     
        </div>
        <div className=' translate-x-[100px] -translate-y-[1150px]'>
            <p className='text-black text-4xl w-20 font-bold'>Finest Design For young Generations</p>
            <p className='text-black py-3 font-semibold text-xl w-56'>Finest material , eco  friendly  - higher durability</p>
        </div>     
    </div>
  )
}

export default Third_Page
