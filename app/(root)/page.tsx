import Hello from '@/components/Hello'
import { resolve } from 'path'
import React from 'react'

const Home = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!")
    }, 3000)
  });
  console.log('Hello World!')
  return (
    <main className='flex justify-center'>
      <div className='flex flex-col text-center h-full w-[99.5%] py-3 shadow-md shadow-gray-50  text-5xl animate-pulse border-2 border-amber-50 mt-40'>
        Welcome to Next.js
        <Hello name="Shree Kant" />
      </div>
    </main>

  )
}
export default Home