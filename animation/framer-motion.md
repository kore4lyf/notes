# Framer Motion

## Installation

```sh
npm i motion
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

## Hover effect with whileHover attribute

```tsx
<motion.li key={topping} onClick={() => addTopping(topping)}
  whileHover={{ scale: 1.3, originX: 0, color: "#f8e112"}}
  transition={{ type: "spring", stiffness: 300}}
  >
  <span className={spanClass}>{ topping }</span>
</motion.li>
```

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
