"use client"

import React, { useContext } from 'react'
import MyContext from './myContext'

const ConsumeContext = () => {
  const data = useContext(MyContext)
  return (
    <div>{ data }</div>
  )
}

export default ConsumeContext