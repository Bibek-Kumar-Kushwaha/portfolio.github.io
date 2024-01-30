import React from 'react'
import { Link } from 'react-router-dom'
import { projectData } from './ProjectData'

export default function Button(props) {
  return (
    <>                         
    <Link to={props.link} className="text-[20px] bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded w-full p-2 " >
       {props.btnName} 
    </Link>
  </>
  )
}
