import React from 'react'

const layout = ({ children }:
  { children: React.ReactNode }
) => {
  return (
    <>
      <p className='text-center text-xl text-cyan-200'>Dashboard Navbar</p>
      {children}
    </>

  )
}

export default layout