import React from 'react'

export default function Center({children,spaceXValue}:{children:React.ReactNode,spaceXValue?:number}) {


  return (
    <div className={`flex items-center  ${spaceXValue ? `space-x-${spaceXValue}` : 'space-x-3'}`}>
        {children}
    </div>
  )
}
