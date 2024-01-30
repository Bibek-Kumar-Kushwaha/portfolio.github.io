import React from 'react'
import Card from './Card'
import { projectData } from './ProjectData'
export default function Project() {
  return (

    <>
      <div className="bg-[#F8FAE5]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  w-[95%] m-auto pt-4 bg-[#F8FAE5] ">
          <Card data={projectData} btnName={'VISIT ME'} />
        </div>
      </div>
    </>

  )
}
