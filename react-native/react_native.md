# React Native with Expo

## Installing Expo

```sh
npx create-expo-app@latest
```

OR

Use Expo CLI

```sh
npm install -g expo-cli
```

To run expo

```sh
expo init my-project
cd my-project
expo start
```

## Launching Expo with a custom IP address

```sh
expo start --host <your_IP_address>
```

## Using Typescript with Expo

```sh
expo init my-project

npm install --save-dev typescript @types/react @types/react-native

npx tsc --init // This command generates a tsconfig.json file in your project directory

// Configure tsconfig.json: Open the tsconfig.json file and configure it according to your project needs. You may need to adjust settings such as target, module, jsx, and outDir.

// Rename files to TypeScript: Rename your .js files to .tsx files if they contain JSX/TSX syntax. For example, rename App.js to App.tsx.

// Start the development server: Run expo start or npm start to start the Expo development server. This will compile TypeScript files and start the development server.
```

## Introduction

## React Native VS Expo

React Native is an Open-Source framework maintained by Meta (Facebook), designed for building cross platform apps.

Expo is an open source framework maintained by Expo, designed for building cross-platform apps.

Unlike plain React Native, which can be challenging and time-consuming to set-up, Expo provides a streamlined experience. Expo has a suite of tools and services built around React Native which greatly simplifies the development processes.

**Expo**: Expo has evolved significantly over the years and now supports nearly all the features necessary for building mobile apps.

## Core Component

- View
- Text
- Image
- ImageBackground
- StatusBar
- Button
- Pressable
- Modal
- ActivityIndicator
- Alert

React Native does not understand the DOM.

In Android and iOS development, we employ a fundamental building block called **view** for user interfaces.

A view is a small rectangular element on the screen that can display text, images, or respond to user input.

**Android** - views are written in Kotlin or Java
**iOS** - views are written in Swift or Objective-C
**React Native** - views are written with JavaScript through React components.

> At runtime React Native generates the corresponding Android and iOS view for these components.

React Native offers a collection of essential pre-built components known as "Core Components" which are readily available for building you app's user interface.

### View

The View component is a fundamental core component in React Native that serves as a building block for creating user interfaces.
It functions as a container that supports layout using flexbox, styling, touch handling, and accessibility controls.
In web development terms, the View component can be compared to the `div` tag.
The view component is typically nested inside other views and can have zero or more children of any type.

```js
import { View } from 'react-native'

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1}}>
      <View style={{ backgroundColor: "lightblue", height: 200, width: 200}}></View>
      <View style={{ backgroundColor: "lightgreen ", height: 200, width: 200}}></View>
    </View>)
}
```

> The view component by default take up the space occupied by its child component. To make view take up the entire space set `flex:1`

### Text

Component for displaying text.

It supports nesting, styling and touch handling.

Depending on the target platform, React Native will translate this component to either a UITextView (iOS), a TextView (Android), or a p (Web).

```js
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Text> Hello World</Text>
    </View>
    )
}
```

> Placing text directly inside a view will cause an error. Every text must be wrapped around the **Text** component.

#### Embedding Text
```js
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Text>
        <Text style={{ color: "white" }}>Hello</Text> World
      </Text>
    </View>
    )
}
```

### Image

The **Image** component enables us to display various types of images, including

- Static Images
- Network Images
- Images from the local disk, such as the camera roll

React Native seamlessly translates the image component to platform-specific counterparts:

- UIImageView for iOS
- ImageView for Android
- img for the Web

#### Local Images

```js
import { View, Text, Image } from 'react-native'

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Image source={logoImg} style={{ height: 200, width: 200 }} />
    </View>
    )
}
```

#### Remote/Network Images

```js
import { View, Text, Image } from 'react-native'

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Image source={{ uri: "https://picsum.photos/300"}} style={{ height: 200, width: 200 }} />
    </View>
    )
}
```

> When using remote images it is necessary to specify the width and the height of the images, as for local images, React Native can infer the width and height from the image detail.

#### Setting Background Image

```js
import { View, Text, ImageBackground } from 'react-native'

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <ImageBackground source={logoImg}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
    )
}
// Use the style={{ flex: 1 }} to make ImageBackground occupy the entire space
```

### ScrollView

ScrollView Component Wraps the platform-specific scrolling functionality.

ScrollViews require a bounded height to function properly.(As in placed within a View)

```js
import { View, Text, Image, ScrollView } from 'react-native'

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 200, height: 200}}></Image>
        <Text>
        Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome 
        Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome 
        
        Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome 

        Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome Lorem Ipsome 
        </Text>

        <Image source={logoImg} style={{ width: 200, height: 200}}></Image>
      </ScrollView>
    </View>
    )
}
```

### Button

The button component allows users to trigger actions

The button component has platform-specific rendering for iOS and Android

The button component is a self closing tag.

```js

import { View, Button} from 'react-native'

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Button title="Press" onPress={() => console.log("Button Pressed")}/>
    </View>
    )
}
```

#### color prop -- Changes the color of a button

```js
<View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
    <Button title="Press" color="midnightblue" onPress={() => console.log("Button Pressed")}/>
</View>
```

#### disabled prop - Disables a button

```js
<View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
    <Button disabled title="Press" color="midnightblue" onPress={() => console.log("Button Pressed")}/>
</View>
```

```js
import { View, Button} from 'react-native'

import { useState } from 'react'

const logoImg = require("./assets/adaptive-icon.png")


export default function App() {
  const [disabled, toogleDisabled] = useState(true)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Button title="Press" color="midnightblue" onPress={() => toogleDisabled((prevValue) => !prevValue)}/>
      <Button disabled={disabled} title="Press" color="midnightblue"/>
    </View>
    )
}
```

### Pressable

Pressable is a wrapper component that detects various stages of press interaction on its defined children.

Pressable can make any other non-pressable component pressable or list for press events.

> Pressable can be used to create custom button

- **onPressIn**: is called when a press is activated
- **onLongPress**: is triggered when a press is held for longer than 500 milliseconds
- **onPressOut**: is called when the press gesture is deactivated.

```md
onPressIn -> onPressout -> onPress

onPressIn -> (after 500ms) -> onLongPress -> onPressOut
```

```js
import { View, Text, Image, Pressable } from 'react-native'

const logoImg = require("./assets/adaptive-icon.png")


export default function App() {
  const [disabled, toogleDisabled] = useState(true)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Pressable onPress={() => alert("Image Pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300}}/>
      </Pressable>

      <Pressable onPress={() => alert("Text Pressed")}>
        <Text>Hello World</Text>
      </Pressable>
    </View>
    )
}
```

### Modal

Modal is a screen that overlays the app content to provide important information or prompt the user for a decision.

Since they are purposefully interruptive make sure you use them only when necessary.

```js
import { View, Text, Button, Modal} from 'react-native'

import { useState } from 'react'

const logoImg = require("./assets/adaptive-icon.png")


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <Button title="Press" color="midnightblue" onPress={() => setIsModalVisible(true)}/>

      <Modal visible={isModalVisible} animationType="fade">
        <View style={{ backgroundColor: "lightgreen", flex: 1}}>
          <Text> Modal Content </Text>
          <Button title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)}/>
        </View>
      </Modal>
    </View>
    )
}
```

#### Modal Props

- **visible**: `true` by default, `false` to hide.
- **animationType**
  values: slide, fade

- **presentationStyle** (only available on iOS)
  values: fullscreen (default), formSheet, pageSheet

  formsheet is narrow while pagesheet is wide.

### Status Bar

The StatusBar component allows you to control the application's status bar.

The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and network information, battery level other status icons.

- Adding the status bar component adds a black background status bar in android (on iOS StatusBar is always transparent).

```js
import { View, StatusBar} from 'react-native'

import { useState } from 'react'

const logoImg = require("./assets/adaptive-icon.png")


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <StatusBar backgroundColor="midnightblue" barStyle="lightContent" hidden={false}/>
    </View>
    )
}
```

#### StatusBar Props

- **backgroundColor** - used to change StatusBar background color on android.
- **barStyle** - changes the text color of StatusBar in android and iOS (`default` on Android: White, `default` on iOS: Black)

value: light-content, dark-content

- **hidden** - hides the visibility of the status bar.

### ActivityIndicator 

The ActivityIndicator component displays a circular loading indicator. It is used to inform users about the status of ongoing processes such as loading an app, submitting a form, or saving updates.

```js
import { View, ActivityIndicator} from 'react-native'

import { useState } from 'react'

const logoImg = require("./assets/adaptive-icon.png")


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <StatusBar backgroundColor="midnightblue" barStyle="lightContent" hidden={false}/>

      <ActivityIndicator/>
      <ActivityIndicator size="large"/>
      <ActivityIndicator size="large" animating={ false }/>
      <ActivityIndicator size="large" color="midnightblue"/>
    </View>
    )
}
```

#### ActivityIndicator Props

- **size** changes the size of ActivityIndicator.
values: small (default), large.

- **color** change the color of the ActivityIndicator.

- **animating** is used to display or hide the ActivityIndicator
values: true, false

### Alert

It acts as an API, that invoke a component, rather than being a component itself.
Alert launches an alert dialog with specified title and message.
Optionally you can include a list of buttons.

SYNTAX:

```js
Alert.alert("Body") // Returns Alert as title
```

```js
Alert.alert("Title", "Body")
```

Adding buttons:

- Android (max is 3 buttons)
- iOS (no limit)
```js
Alert.alert("Title", "Body", [
  {
    text: "Cancel",
    onPress: () => console.log("Cancel Pressed")
  },
  {
    text: "Ok",
    onPress: () => console.log("Ok Pressed")
  }
])
```

Example:

```js
import { View, Button, Alert } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <StatusBar backgroundColor="midnightblue" barStyle="lightContent" hidden={false}/>

      <Button title="Alert" onPress={() => Alert.alert("Title", "Body", [
  {
    text: "Cancel",
    onPress: () => console.log("Cancel Pressed")
  },
  {
    text: "Ok",
    onPress: () => console.log("Ok Pressed")
  }
])} />
    </View>
    )
}
```

### Custom Component

This involves using other components to create another component.

/components/Greet.js
```js
import { View, Text } from 'react-native'

export default function Greet({ name }) {
  return (
    <View>
      <Text>Hello, { name }</Text>
    </View>
  )
}
```

```js
import { View } from 'react-native'
import Greet from './components/Greet'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, paddingTop: 60}}>
      <StatusBar backgroundColor="midnightblue" barStyle="lightContent" hidden={false}/>

      <Greet name="Korede"/>
      <Greet name="Olamide"/>
    </View>
    )
}
```

## Styling React Native Apps

- React Native does not use CSS for styling.
- You style your app using JavaScript.
- Names are written in camel case (e.g. backgroundColor instead of background-color).

### Styling Approaches

1. Inline Styles
2. StyleSheet API

The recommended approach is the StyleSheet API. Using StyleSheet API makes code much more readable.

### StyleSheet API

```js
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.title}>StyleSheet APIs Des</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 60
  },
  title: {
    color: "midnightblue"
  }
})
```

### Multiple styles

```js
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={[styles.box, styles.lightgreenBg]}></View>
      <View style={[styles.box, styles.tealBg]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 60
  },
  box: {
    height: 100,
    width: 100
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  tealBg: {
    backgroundColor: "teal"
  }
})
```

> The last style in the array takes precedence.

### Box Model

- Content
- Padding
- Border
- Margin

In React Native all dimensions are unit less (no rem or Other unit) but one can you percentage.

```js
{
  width: 25;
}
```

**Padding/Margin**:

- paddingHorizontal
- paddingVertical
- paddingHorizontal
- paddingVertical

**Border**:

- borderWidth
- borderColor
- borderStyle (solid by default)
- borderRadius (Works on both platform when applied to the view)

### Shadow and Elevation

iOS uses shadow properties while Android uses Elevation property to achieve box shadow

```js
const styles = StyleSheet.create({
  iosShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4 // Blur Radius
  },

  androidShadow: {
    elevation: 10;
  }
})
```

### Style Inheritance

In React Native there is no inheritance between a view component and a text component.
It supports Text inheritance between nested Text component.

### Layout with Flexbox

At the core of layout design in React Native is Flexbox.

Flexbox is a powerful one-dimensional layout model used to arrange elements within a container.

With Flexbox, you have the freedom to arrange Items either horizontally or vertically.

You can easily control the spacing and alignment of items within the container.

#### Flexbox

Flex consists of two main entities

- Flex Container (Parent View Component)
- Flex Items (Child View Component(S))

```js
<View>
  <View> Item 1 </View>
  <View> Item 2 </View>
  <View> Item 3 </View>
</View>
```

**Axes**:

- Main Axis
- Cross Axis

In web dev, the Main Axis runs Left to Right, while the Cross Axis is from Top to Bottom.

In React Native it's the opposite, the Main Axis runs from Top to Bottom, while the Cross Axis runs from Left to Right.

#### Flex

The flex property plays a crucial role in defining how much a view will fill the screen along the main axis.

It accepts an integer value greater than or equal to 0, indicating the fraction of the available space the component should occupy.

In web dev, a div element's display must be set to flex before flex properties can work on it. In React Native, View component is set to flex by default.

> flex is used allow a flex item share available space.
  > e.g. Setting `flex: 1` flex container makes the view occupy the entire space. Setting a flex value on a flex item makes it share available space with other flex items. A flex item with `flex: 3` will be 3 time larger than a flex item with `flex: 1`.

#### flexDirection

flexDirection determines how the flex items are placed within the container.

By default the main axis flows form top to bottom, causing the items to be displayed from top to bottom in the UI.

By changing the value of the flexDirection property, we can alter how the items are positioned.

**Values**:

- column
- column-reverse
- row
- row-reverse

#### justifyContent

justifyContent defines the alignment along the main axis.

By default, "flex-start" (which places items at the top).

**Values**:

- "flex-start"
- "flex-end"
- "center"
- "space-between"
- "space-around"
- "space-evenly"

#### alignItems

alignItems defines the default behaviour for laying out flex items along the container's cross-axis.

Works similarly to justifyContent, but in the perpendicular direction.

By default value is set to "stretch".

**Values**:

- stretch
- flex-start
- flex-end
- center
- baseline (Aligns items based on there content base line, think of this as the flex item(s) content maintaining the center line while container height may vary.)

#### alignSelf

alignItems is applied  to the container and controls the alignment of all items within it.

alignSelf is applied to individual items, allowing us to control the alignment of each item independently.

The values available for alignSelf are similar to those used in alignItems.

**Values**:

- flex-start
- flex-end
- center
- auto (default [inheriting alignItems prop from parent])
- stretch

#### flexWrap

flexWrap allows us to control how flex items behave whenn there's limited space within the container.

**Values**:

- no-wrap
- wrap
- wrap-reverse

#### alignContent

The alignContent property aligns lines of content along the cross axis.

Similar to how the alignItems property aligns individual items along the cross-axis.

A very important condition is that multiple columns or rows must exist within the container (wrap).

**Values**:

- flex-start
- flex-end
- stretch
- space-between
- space-around
- space-evenly

#### gap

Gap related properties allow us to manage spacing between rows and columns

- rowGap (sets row gap after every row)
- columnGap (sets column gap after every column)
- gap (set row and column gap)

#### flexBasis

The flex basis property determines the initial size of a flex item before any extra space in the container is distributed.

Alternative to using the height and width properties in flex layouts.

```js
flexBasis: 140;
```

One could have used height instead of flexBasis since it look like both do the same thing.
The benefit of using flexBasis over height is that when `flex` is used (to take up the available space), the flex item with height doesn't grow, while the one with flex basis has the ability to expand.

#### flexShrink

flexShrink determines how children within a container shrink along the main axis when their combined size exceeds the container's size.

The flexShrink factor is relative to other items within the container.

```js
flexShrink: 1
```

#### flexGrow

flexGrow determines how much space an item should occupy inside a flex container when there is extra space available.

The flexGrow factor is always relative to other items within the container.

```js
flexGrow: 1
```

#### flex vs flexGrow

When flex is set to a positive number, it is equivalent to setting flexGrow with the same positive number.

flex also implicitly sets flexShrink to 1 and flexBasis to 0

```js
flex: /* positive number */

// flex is same as

flexGrow: /* positive number */, flexShrink: 1, flexBasis: 0
```

### Relative and Absolute Layout

The layout are based on the **position** property, which defines how an element is positioned within its parent container.

```js
  position: "absolute"
```

**Relative Layout**:

In this layout, an element is positioned according to the normal flow of the layout.

It remains in its original position and can be offset from that position using the top, right, bottom, and left value.

Importantly, this offset does not affect the positioning of any sibling or parent elements.

**Absolute Layout**:

In this layout, an elelment does not participate in the normal flow of the layout.

It is instead laid out independently of its siblings.

The position of the element is determined by the top, right, bottom, and left values which specify specific coordinates relative to its parent container.

## Dynamic User Interfaces

Currently, all our learning has centered around iPhone 14 and pixel 4 devices.

Our app's users won't all be using identical devices.

Device sizes may vary, ranging from more compact phones to larger devices lke iPads or Android tablets.

We must ensure that our app's user interface remains responsive to these different device sizes while maintaining an optimal user experience.

On the same device, a user might opt for portrait mode, while another prefers landscape orientation.

### Dimensions API

A solution is to use percentages for width, height

```js
import { View, Text, StatusBar, StyleSheet, Dimensions } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "plum",
    flex: 1,
    justifyContent: "center"
  },
  box: {
    alignItems: "center",
    backgroundColor: "lightblue",
    height: windowHeight > 600 ? "60%" : "90%",
    justifyContent: "center",
    width: windowWidth > 500 ? "70%" : "90%",
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24
  }
})
```

### Dimensions API Drawback

Device dimension can change when screen orientation changes, but **Demensions** does not update.

By default the orientation of an Expo is set to portrait, to make landscape work, one must change `"orientation": "portrait"` to `"orientation" : "default"` in the `app.json` file.

There is a fix for this using react hooks and evenlistener for change in dimension, but it is verbous to code.

```js
import { useState, useEffect } from "react"
import { View, Text, StatusBar, StyleSheet, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window")
  })
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    })

    return () => subscription?.remove()
  })

  const { window } = dimensions
  const windowWidth = window.width
  const windowHeight = window.height

  console.warn({ windowHeight, windowWidth })
  
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <View 
        style={
          [ styles.box, 
            {
              height: windowHeight > 600 ? "60%" : "90%",
              width: windowWidth > 500 ? "70%" : "90%"
            }
          
          ]}>
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "plum",
    flex: 1,
    justifyContent: "center"
  },
  box: {
    alignItems: "center",
    backgroundColor: "lightblue",
    justifyContent: "center"
  }
})

```

Instead there is a hooks `useWindowDimensions` that is capable of handling this.

### useWindowDimensions

```js
import { View, Text, StatusBar, StyleSheet, useWindowDimensions } from 'react-native'

export default function App() {

  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  console.warn({ windowHeight, windowWidth })
  
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <View 
        style={
          [ styles.box, 
            {
              height: windowHeight > 600 ? "60%" : "90%",
              width: windowWidth > 500 ? "70%" : "90%"
            }
          
          ]}>
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "plum",
    flex: 1,
    justifyContent: "center"
  },
  box: {
    alignItems: "center",
    backgroundColor: "lightblue",
    justifyContent: "center"
  }
})
```

## SafeAreaView Component

SafeAreaView allows components to rendered within the safe area boundry of a device. It applies padding to reflect the physical limitations of the screen such as rounded corners fof the screen.

Some devices like iPhones some things like Camera & Ear Piece areas on their screen.

We use SafeAreaView to ensure we are building on areas without obstruction.

When you use SafeAreaView you might need to change the background, by default none safe areas will be white. Use the backgroundColor property to change their color.

```js
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function App() {
  
  return (
    <SafeAreaView style={ styles.safeContainer }>
      <View style={styles.container}>
        <View>
          <Text  style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold"
  }
})
```

## Platform Specific Code

When developing a cross-platform app, maximizing code reuse is a priority.

There are situations where it becomes necessary to tailor your code to specific platforms.

React Native offers two approaches for organizing and seperating platform-specific code.

- Platform module
- Platform-specific file extensions

### Platform Module

Import the `Platform` from react-native.

use `Platform.OS` know the platform you are on.

For Example

```js
 container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingBottom: Platform.OS === 'ios' ? 30 : 0
  }
```

> Platform Module is appropriate only when small part of the component is platform specific.

### Platform Specific File Extensions

```js
text: {
  ...Platform.select({
    ios: {
      color: "purple",
      fontSizd: 24,
      fontStyle: "italic"
    },
    android: {
      color: "blue",
      fontSize: 30
    }
  }),
  fontWeight: "bold",
  textAlign: "center"
}
```

Another approach is create component that are Identical but renders based on the device name within the filename.

e.g.
./CustomButton.ios.js
./CustomButton.android.js

(There style should be included)

When `CustomButton` is imported in the App, the file that will be requested depends on the platform.



