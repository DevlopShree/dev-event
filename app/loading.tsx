// create a great skelaton loading screen design, use tailwind css in tsx formate
import React from 'react'
import Loader from '@/components/Loader'

const Loading = () => {
  return (
   <main className='grid grid-cols-3 gap-4 m-3 '>   
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
    <Loader/>
   </main>
  )
}

export default Loading
