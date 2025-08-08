import React from 'react'

export default function Badge({children}) {
  return (
    <div className='badge bg-danger rounded-full text-white px-2 py-1' >
      {children}
    </div>
  )
}
