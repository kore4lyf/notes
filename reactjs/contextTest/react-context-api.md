# React Context

Article Written by Benedicta Onyebuchi - [How to use react context](https://www.freecodecamp.org/news/how-to-use-react-context/).

React Context provides us a way to pass data down through the component tree to where we need it without having to manually pass props at every single level.

It acts as a global storage space for all your components in your project.

React Context allows data to be passed from the parent component to any nested component that requires it, simplifying the process as opposed to prop threading.

## How to use React Context API

1. Create a context

```jsx
import { createContext } from 'react'

const MyContext = createContext("")

export default MyContext
```

2. Wrap your App with Context provider

```jsx
import React from 'react'
import MyContext from './myContext'

const App = () => {

  return (
    <MyContext.Provider value="Ultra combo" >
      {/* COMPONENT */}
    </MyContext.Provider>
  )
}

export default App
```

3. Consume the Context in components

```jsx
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

export default **App**
```
