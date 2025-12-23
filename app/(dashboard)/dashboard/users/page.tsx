import React from 'react'
import Link from 'next/link'

const Users = () => {

  return (
    <>
    <div className='text-4xl text-cyan-300 text-center mt-5'>Dashboard Users</div>
    <ul className='mt-5 grid grid-cols-2 text-xl text-center w-[50%] m-auto'>
      {
        Array.from({length: 8}).map((_, i) => (
          <li key={i} className="p-2 border border-amber-200 shadow-md shadow-amber-100">
          <Link href={`/dashboard/users/${i}`} className='block'>
            User {i}
          </Link>
          </li>
        ))
      }
    </ul>
    </>

  )
}

export default Users