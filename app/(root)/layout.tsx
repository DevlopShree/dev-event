import React, {ReactNode}  from 'react'
import Link from 'next/link'
const layout = ({ children }:
  { children: ReactNode }
  // { children: React.ReactNode }
) => {
  return (
    <>
      {/* <p className='text-center text-xl text-cyan-200'> Navbar </p> */}
      <ul className='flex text-black text-center'>
        <li className='flex-1 py-1.5 bg-zinc-200'><Link className='block' href="/">Main</Link></li>
        <li className='flex-1 py-1.5 bg-red-200'><Link className='block' href="/home">Home</Link></li>
        <li className='flex-1 py-1.5 bg-blue-200'><Link className='block' href="/about">About</Link></li>
        <li className='flex-1 py-1.5 bg-green-200'><Link className='block' href="/dashboard/users">User</Link></li>
        <li className='flex-1 py-1.5 bg-yellow-200'><Link className='block' href="/dashboard/analytics">Analytics</Link></li>
      </ul>
      {children}
    </>

  )
}

export default layout