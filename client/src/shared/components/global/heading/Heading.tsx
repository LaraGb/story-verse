import React from 'react'

export default function Heading({content}:{content:string}) {
  return (
    <h1 className='text-2xl font-bold'>
      {content}
    </h1>
  )
}
