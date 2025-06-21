# Framer Motion

## Installation

```sh
npm i motion
```

## Introduction

Importing motion in a client component

```js
import { motion } from "motion/react"
```

Importing motion in a server component

```js
import { motion } from "motion/react-client"
// OR
import * as motion from "motion/react-client"
```

To make an element animatable by motion, one must prepend the element with `motion.<elementName>`

```jsx
<motion.element/>
<motion.h1/>
<motion.section/>
<motion.img/>
<motion.input/>
<motion.div/>
<motion.../>
```

The most common props in motion

- initial: The inital prop is used to define the initial state of a component when it enters the DOM.
- animate: Used to set animations for a component
- exit: Use the define the animation that occurs when the animation is removed from the DOM.

loader.jsx

```jsx
import { motion } from "motion/react"

const Home = () => {
  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, index)) => (
      <motion.div
        key={index}
        className="w-8 h-8 bg-teal-500 rounded-full"
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 0.,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: index * 0.2
        }}
      )
      
      }
    </div>
  )
}
```

## Setup and animate attribute

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 animate={{
        fontSize: "50px",
        color: "lightblue"
      }}>
        Welcome to Pizza Joint
      </motion.h2>

      <Link to="/base">
        <motion.button 
          animate={{
            scale: 1.5,

          }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;
```

## Initial attribute

To use motion framer animate attribute on any component, prepend `animate.` to the component or html element.

An attribute we can use other than the animate is the `initial` attribute.

```tsx
<motion.div
  initial={{
  y: -250
  }}

  animate={{
  y: -10
  }}
  className="title">
  <h1>Pizza Joint</h1>
</motion.div>
```

```tsx
<motion.div 
  initial={{
    x: "-100vw"
  }}

  animate={{
    x: 0
  }}

  className="next">
  <Link to="/toppings">
    <button>Next</button>
  </Link>
</motion.div>
```

## Transition

Transition is used to control how the animation transitions from start to end.

```tsx
<div className="home container">
  <motion.h2 
    initial={{
      opacity: 0
    }}

    animate={{
      opacity: 1
    }}

    transition={{
      delay: 1.5, // 1.5 seconds
      duration: .5, // 5 seconds
    }}
  >
    Welcome to Pizza Joint
  </motion.h2>

  <Link to="/base">
    <motion.button 
      animate={{ }}>
      Create Your Pizza
    </motion.button>
  </Link>
</div>
```

```tsx
<motion.div
  initial={{
  y: -250
  }}

  animate={{
  y: -10
  }}

  transition={{
  delay: .2
  }}
  className="title">
  <h1>Pizza Joint</h1>
</motion.div>
```

Duration can only work, if transition type is `tween`.

### Transition Properties

#### Type

By default `spring` (You'd notice a bounce effect depending on how fast an animation is).

other options.

- tween
- spring
- keyframe
- inertia
- decay

```tsx
<motion.div
  initial={{
  y: -250
  }}

  animate={{
  y: -10
  }}

  transition={{
  delay: .5,
  type: "tween"
  }}
  className="title">
  <h1>Pizza Joint</h1>
</motion.div>
```

Type `spring` can take a `stiffness` property. Which is a way of making emphasis on how bouncy an element or component can be.

```tsx
<motion.div
  initial={{
  y: -250
  }}

  animate={{
  y: -10
  }}

  transition={{
  delay: .5,
  type: "spring",
  stiffness: 500
  }}

  className="title">
  <h1>Pizza Joint</h1>
</motion.div>
```

## Gesture Animation

- whileHover
- whileTap
- whileDrag

### Hover effect with whileHover attribute

```tsx
<motion.li key={topping} onClick={() => addTopping(topping)}
  whileHover={{ scale: 1.3, originX: 0, color: "#f8e112"}}
  transition={{ type: "spring", stiffness: 300}}
  >
  <span className={spanClass}>{ topping }</span>
</motion.li>
```

### Click effect with whileTap attribute

```tsx
<motion.li key={topping} onClick={() => addTopping(topping)}
  whileTap={{ scale: 1.3, originX: 0, color: "#f8e112"}}
  transition={{ type: "spring", stiffness: 300}}
  >
  <span className={spanClass}>{ topping }</span>
</motion.li>
```

### Drag effect with whileDrag attribute

```tsx
<motion.li key={topping} onClick={() => addTopping(topping)}
  whileDrag={{ scale: 1.3, originX: 0, color: "#f8e112"}}
  transition={{ type: "spring", stiffness: 300}}
  drag>
  <span className={spanClass}>{ topping }</span>
</motion.li>
```

## Stagger Animation

## Variants

1. Variants allow us to extract our initial and animation our transition object into a single outside object, which we can then reference.

2. They also allow us to propagate variant changes through the DOM, resulting in cleaner code.

3. They allow us to create timing relationships between parent motions and children motions using transition orchestration properties.

```tsx
<motion.div className="base container"
  initial={{ x: "100vw"}}
  animate={{ x: 0}}
  transition={{ type: "spring", delay: 0.5}}>
  <h3>Step 1: Choose Your Base</h3>
</motion.div>
```

Using variant

```tsx
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: .5
    }
  }
}

const h3Variants = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: .5
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <motion.h3 variant={h3Variant}>Step 1: Choose Your Base</motion.h3>
    </motion.div>)
}
```

child element do not require setting initial and animate as long as the same convention is use (hidden and visible). i.e any variant key used is parent element will be automatically set for child elements too.

### Transition Orchestration Property

- when
(when the animation should occur in relation to any children elements). Values include:
  - beforeChildren (We want to complete the parent animation before the children animation runs)
  - afterChildren (opposite of beforeChildren)

- mass
Higher mass value means the element will move slower, lower mass value means the element will move faster

- damping
Damping means opposing force

- staggerChildren
for example: (0.4 secs)
Animate children one after the other (with 0.4sec difference)

```js
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      type: "spring",
      when: "beforeChildren",
      mass: 0.4, // Higher mean - it will move slower, lower - opposite
      damping: 8, // opposing force
      staggerChildren: 0.4, // (0.4 secs) Animate children one after the other
    } 
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
```

## Keyframes

```js
const buttonVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: { delay: 2}
  }
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #ffffff",
    boxShadow: "0px 0px 8px #ffffff",
  }
}
```

`x: [0, -20, 20, -20, 20, 0]`

here we have specified the positions we want to animate a button, and it stops when it gets to the end of the animation.

## Repeating Animations

This can be achieved using a transition orchestration property called repeat.

Fixed repeating:
Play back an forth

```js
const buttonVariants = {
  hover: {
    scale: [1, 1.1],
    textShadow: "0px 0px 8px #ffffff",
    boxShadow: "0px 0px 8px #ffffff",
    transition: {
      duration: 0.3,
      repeat: 10
    }
  }
}
```

Infinity:

```js
const buttonVariants = {
  hover: {
    scale: [1, 1.1],
    textShadow: "0px 0px 8px #ffffff",
    boxShadow: "0px 0px 8px #ffffff",
    transition: {
      duration: 0.3,
      repeat: Infinity
    }
  }
}
```

## Animating an element out of the Page

This can be achieved using animate presence.

App.jsx

```js
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const App = () => {

  const location = useLocation()

  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes location={location}>
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
```

Wrap the element in `AnimatePresense` then define your exit animation on the element e.g `<motion.div exit={{ y: "-100vw", opacity: 0}}`

The essence assigning location to route here is to make make the component rerender as the value of the location is changed.

Include your exit object in the route components.

```js
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h2>
        Welcome to Pizza Joint
      </h2>
    </motion.div>)
}
```

## Dragging Items

Just add drag prop to

```js
<motion.div className="logo" drag>
Pizza
</motion.div>
```

With the drag property any element on the page can be drag any where within and beyond the screen.

To allow element return to it position when dragged, use the position.

```js
<motion.div className="logo" drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0}}>
Pizza
</motion.div>
```

One might also set a loose boundary range, where an element can be dragged to before it will be constrained to move beyond.

The code be specifies that the div element can be drag 50px downward,

```js
<motion.div className="logo" drag dragConstraints={{ left: 50, top: 0, right: 0, bottom: 0}}>
Pizza
</motion.div>
```

Modify Drag elastic property:
Make an element easier or difficult to drag around.

```js
<motion.div className="logo" drag dragConstraints={{ left: 50, top: 0, right: 0, bottom: 0}} dragElastic={0.7}>
Pizza
</motion.div>
```

The smaller the value the harder it will be to drag around.

### Drag on x axis only

```js
<motion.div className="logo" drag="x" dragConstraints={{ left: 50, top: 0, right: 0, bottom: 0}}>
Pizza
</motion.div>
```

### Drag Example

```jsx
import { useState } from "react"
import { motion } from "motion"

const SwappableCard = () => {
  const [isRemoved, setIsRemoved] = useState(false)

  const handleSwipe = (_: any, info: any) => {
    if (info.offset.x > 100) {
      setIsRemoved(true)
    } else if (info.offset.x < -100) {
      setIsRemoved(false)
    }
  }

  return (
    <motion.div className={`w-64 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white ${isRemoved ? "hidden" : ""}`}
      drag="x" dragConstraints={{left: -100, right: 100}} onDragEnd={handleSwipe}>
      Swipe Me!
    </motion.div>
  )
}
```

## Hooks

### useMotionValue

useMotionValue hook allow one to trigger animations based on component state or events.

```jsx
import React from 'react'
import { motion, useMotionValue, useMotionValueEvent } from 'motion/react';


const App = () => {

  const x = useMotionValue(100)

  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started on x")
  })
  
  useMotionValueEvent(x, "change", (latest) => {
    console.log("x position is changed to  ", latest)
  })
  
  return (
    <div>
      <motion.div className="box"
        drag
        dragConstraints={{ left: 0, right: 200}}
        style={{ x }}
      />
    </div>
  )
}

export default App
```

The code above logs the position of the div when it's x value changes.

The useMotionValueEvent function is called when the value of a style property (e.g. x, scale, right) is changes.

```tsx
import React, { type ChangeEvent } from 'react'
import { motion, useMotionValue } from 'motion/react';


const App = () => {

  const scale = useMotionValue(1)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => scale.set(parseFloat(e.target.value))
  
  return (
    <div>
      <motion.div className="box"style={{ scale }}/>
      
      <div className="mt-[6rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}/>
      </div>
    </div>
  )
}

export default App
```

The size of the div increases as the input range value increases.
We have a `set` method from `useMotionValue` which allows us to bind the value of the input range element to the scale value of the div.

### Getting useMotionValue Data

```tsx
cont x = useMotionValue(0)
cont y = useMotionValue(0)

const App = () => {
  <p drag style>
    postion: ({x.get().toFixed(2)}, {y.get().toFixed(2)}
  </p>
}
```

### Setting useMotionValue Data

```tsx
const scale = useSpring(1)

const changeHandler = (e: ChangeEvent<HTMLInputElement>) => scale.set(parseFloat(e.target.value))
```

#### useSpring

useSpring Hook is Similar to `useMotionValue` but **gives a spring animation effect**.

```js
import React, { type ChangeEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react';


const App = () => {

  const scale = useSpring(1)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => scale.set(parseFloat(e.target.value))
  
  return (
    <div>
      <motion.div className="box"style={{ scale }}/>
      
      <div className="mt-[6rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}/>
      </div>
    </div>
  )
}

export default App
```

### useTransform

useTransform hook is used to map one range of values to another.

It's great for creating smooth animations and effects based on input values, like scroll position or mouse movements.

```tsx
import React, { type ChangeEvent } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react';


const App = () => {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // when backgroundColor is -100 make Red, when it is 100 make it green
  const backgroundColor = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"])
  
  return (
    <motion.div className="w-32 h-32 flex item-center justify-center rounded-lg shadow-lg cursor-pointer"
      dragConstraints={{
        left: -200,
        right: 200,
        top: -200,
        bottom: 200
      }}
      
      style={{ x, y, backgroundColor}}
      drag>
      <span className="text-white">Drag Me!</span>
    </motion.div>
  )
}

export default App
```

### useCycle Hook

useCycle allow one to toggle through different animation properties.

/components/Loader.tsx

```jsx
import React from 'react'
import { motion, useCycle } from "motion/react"

const loaderVariants = {
  animationOne: {
    x: [-20, 20, -20],
    y: [0, -30, 0],
    transition: {
      x: { repeat: Infinity, duration: 0.8, alternate: true },
      y: { repeat: Infinity, duration: 0.4, ease: "easeOut"}
    }
  },

  animationTwo: {
    y: [0, -40, 0],
    x: 0,
    transition: {
      y: { repeat: Infinity, duration: .8, ease: "easeOut"}
    }
  }

}

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
  return (
    <>
      <motion.div className="loader"
        variants={loaderVariants}
        animate={animation}> </motion.div>
      <div onClick={()=> cycleAnimation()}>Cycle Loader</div>
    </>
  )
}

export default Loader
```

## Scroll Triggered Animation

These animation are triggered when the use scrolls to a specific point in the viewport. Once the scroll reaches that point, the animation plays.

Uses Cases:

- Revealing Elements
- Changing Styles
- Starting animations at specific sections of a page

### Scroll Driven Animations

Animation properties can be mapped directly to the scroll position.

Use Cases:

- Parallax Effect
- Transforming Elements
- Adjusting Opacity based on scroll depth

The are two types of props that can be used to achieve Scroll animation in motion.

1. whileInView
2. viewport

**whileInView Prop**:

The whileInView prop is used to trigger animations when an element comes into viewport.
It allows us to define how an element should animate while it is visible on the screen.

```tsx
import React from 'react'
import { motion } from 'motion/react';


const App = () => {
  
  return (
    <div className="flex justify-center items-start mt-[100rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div className="bg-white rounded-lg p-6 shadow-lg text-center"
          initial={{ scale: 0.5, opacity: 0}}
          whileInView={{ scale: 1, opacity: 1, y: -200}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-black">Amazing  Card</h2>
          <p className="text-gray-600"> This card animates beautifully into the view</p>
        </motion.div>
      </div>
    </div>
  )
}

export default App
```

**viewport Prop**:

The viewport prop is used to customize how animations are triggered based on the visibility of an element in the viewport.
It allow you to specify settings that affect when and how animations occur as elements scroll into or out of view.

```tsx
import React from 'react'
import { motion } from 'motion/react';

const boxes = Array.from({length: 6},(_, index) => index + 1 )

const App = () => {  
  return (
    <div className="flex flex-col text-white items-center justify-center min-h-screen mt-[300rem]">
      <h1 className="text-4xl font-bold mb-10">Scroll To Animate</h1>
      <div className="space-y-6">
        {boxes.map((box)=> (
          <motion.div key={box} className="w-64 h-64 bg-blue-500 flex items-center justify-center text-white text-xl rounded-log shadow-lg"
          initial={{ opacity: 0, scale: 0.5}}
          whileInView={{ opacity: 1, scale: 1}}
          viewport={{once: true, amount: 0.5}}
          transition={{ duration: 0.5, ease: "easeInOut"}}
          >Box {box}</motion.div>
        ))}
      </div>

    </div>
  )
}

export default App
```

`viewport={{once: true, amount: 0.5}}`

`once: true`, means the animation only run once when the element enters the viewport. If you scroll away and then back, it won't re-animate.

`amount: 0.5`, means the animation will trigger when at least 50% of the element is in the viewport. Possible values include:

1. 0: As soon as any part of the element is visible
2. 1: Only when the entire element is visible
3. "some": When any part fo the element is visible.
4. "all": When the entire element is visible.

### useScroll

useScroll hook helps to track the scroll position of the page. It makes it easy to create animations or effects that respond to how much the use has scrolled.

```tsx
import React, { type ChangeEvent } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';

const boxes = Array.from({length: 6},(_, index) => index + 1 )

const App = () => {
  const {scrollY} = useScroll()

  const scale = useTransform(scrollY, [0, 1094], [1, 1.5])
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  // log scrollY value
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log(latest)
  // })
  
  return (
    <div className="flex flex-col text-white items-center justify-center min-h-screen mt-[80rem]">
      <h1 className="text-4xl font-bold mb-10">Scroll To Animate</h1>
      <div className="space-y-6">
        {boxes.map((box)=> (
          <motion.div key={box} className="w-64 h-64 bg-blue-500 flex items-center justify-center text-white text-xl rounded-log shadow-lg"
          style={{
            scale,
            opacity
          }}
          transition={{ duration: 0.5, ease: "easeInOut"}}
          >Box {box}</motion.div>
        ))}
      </div>

    </div>
  )
}

export default App
```

## Examples

### Rotate On Drag

```jsx
import React, { useState } from 'react'
import { motion } from 'motion/react';

const App = () => {
  const [rotation, setRotation] = useState(0)

  const handleDrag = (_: any, info: any) => {
    const newRotation = info.offset.x 
    setRotation(newRotation)
  }
  
  return (
    <motion.div className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center"
    onDrag={handleDrag}
    style={{ rotate: rotation}}
    drag="x">Drag Me!</motion.div>
  )
}

export default App
```

### Using onTap

```jsx
import React, { useState } from 'react'
import { motion } from 'motion/react';

const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500", ]

const App = () => {
  const [colorIndex, setColorIndex] = useState(0)

  const handleTap = () => {
    setColorIndex(prev => prev + 1)
  }
  
  return (
    <motion.div className={`w-32 h-32 ${colors[colorIndex]} rounded-lg flex items-center justify-center`}
    onTap={handleTap}
    drag="x">Drag Me!</motion.div>
  )
}

export default App
```

### Using onTapStart, onTapCancel & onTap to simulate hold

```tsx
import React, { useState } from 'react'
import { motion } from 'motion/react';

const App = () => {
  const [isLarge, setIsLarge] = useState(false)

  const handleLongPressStart = () => setIsLarge(true)
  const handleLongPressEnd = () => setIsLarge(false)
  
  return (
    <motion.div className={`w-32 h-32 bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer ${isLarge ? "w-48 h-48" : ""}`}
    onTapCancel={handleLongPressEnd}
    onTapStart={handleLongPressStart}
    onTap={handleLongPressEnd}>Long Press Me!</motion.div>
  )
}

export default App
```

### Stagger Text

```tsx
import React, { useState } from 'react'
import { motion } from 'motion/react';

const text = "Hello, World"

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const App = () => {
  
  return (
    <div>
      <motion.h1 className="text-6xl font-bold text-white" 
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2}}
      >
        <p>
          {text.split("").map((char, index) => (
            <motion.span 
              variants={staggerVariants}
              key={index}>
                {char}
            </motion.span>
          ))}
        </p>
      </motion.h1>
    </div>
  )
}

export default App
```

### Hover with onHoverStart & onHoverEnd

```tsx
import React, { useState } from 'react'
import { motion, useMotionValue } from 'motion/react';

const App = () => {
  const scale = useMotionValue(1)
  
  return (

    <>
    <motion.button
      className="bg-blue-500 text-white p-4 px-6 rounded-lg"
      onHoverStart={() => scale.set(1.4)}
      onHoverEnd={() => scale.set(1)}
      transition={{ duration: .4}}
      style={{ scale }}
      >
      Hover Me
    </motion.button>
    </>
  )
}

export default App
```

### Adjusting Delay with custom

```tsx
const expandRowVariants = {
  hidden: { opacity: 0 ,y: 50},
  visible: (i: any) => {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1}
  }
}

// usage

<motion.div variants={expandRowVariant} custom={1} className="flex items-center">
  Mango
</motion.div>
<motion.div variants={expandRowVariant} custom={2} className="flex items-center">
  Grape
</motion.div>
```