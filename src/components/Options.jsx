import React from 'react'

function Options() {
  return (
    <div className='mx-auto h-screen flex flex-col items-center justify-center  '>
       <div className='space-y-9 text-center *:font-light *:text-lg md:*:text-2xl *:hover:text-purple-400'>
       <h1>Database Schema for User Roles</h1>
        <h1>Employee Management Database</h1>
        <h1>Permissions & Access Control Schema</h1>
        <h1>Customer Orders & Payments Schema</h1>
        <h1>Product & Cart Schema</h1>
       </div>
       <button className='rounded-full bg-black text-white mt-32 px-10 py-3.5 text-lg'>+ New Project </button>
        
    </div>
  )
}

export default Options