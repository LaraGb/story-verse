import React from 'react'

export default function Center({children,spaceXValue}:{children:React.ReactNode,spaceXValue?:string}) {

  return (
    <div className="flex items-center space-x-2">
      {children}
    </div>
  )
}
