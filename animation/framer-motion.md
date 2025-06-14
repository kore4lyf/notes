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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <h3>Step 1: Choose Your Base</h3>
    </motion.div>)
}
```