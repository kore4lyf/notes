"use client"

import React, { ReactNode } from 'react'
import MyContext from './myContext'
import ConsumeContext from './ConsumeContext'

interface appProps {
  children: ReactNode
}

const App: React.FC = () => {

  return (
    <MyContext.Provider value="Ultra combo" >
      <ConsumeContext/>
    </MyContext.Provider>
  )
}

export default App