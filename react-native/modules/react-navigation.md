# React Navigation

## Table

1. Fundamentals

  - Getting started
  - Hello React Navigation
  - Moving between screens
  - Passing parameters to routes
  - Configuring the header bar
  - Header buttons
  - Nesting navigators
  - Navigation lifecycle
  - Next steps

2. Guides
  
   - Authentication flows
   - Supporting safe areas
   - Customizing tab bar
   - Hiding tab bar in screens
   - Status bar configuration
   - Opening a modal
   - Multiple drawers
   - Options with nested navigators
   - Android back button behavior
   - Shared element transitions
   - Preventing going back
   - Call a function on focus
   - Navigation Ref
   - Deep linking
   - Configuring links
   - Web support
   - Server rendering
   - Screen tracking
   - Themes
   - State persistence
   - Static and dynamic APIs
   - Writing tests
   - Configuring TypeScript
   - Troubleshooting
   - Upgrading from 6.x

4. Navigators

   - Stack
   - Native Stack
   - Bottom Tabs
   - Drawer
   - Material Top Tabs

## Fundamentals

### Getting Started

#### Minimum requirements

```txt
react-native >= 0.72.0
expo >= 52 (if you use Expo Go)
typescript >= 5.0.0 (if you use TypeScript)
```

#### Starter template

If you're starting a new project, you can use the React Navigation template to quickly set up a new project with Static configuration:

```sh
npx create-expo-app@latest --template react-navigation/template
```

#### Installation

Install the required packages in your React Native project:

```sh
npm install @react-navigation/native
```

let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code.

The libraries we will install now are react-native-screens and react-native-safe-area-context.

```sh
npx expo install react-native-screens react-native-safe-area-context
```

If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.

```sh
npx pod-install ios
```

#### Dynamic configuration

The dynamic configuration allows for more flexibility but requires more boilerplate and configuration (e.g. for deep links, typescript etc.).

To get started with dynamic configuration, first, we need to wrap your app in NavigationContainer. Usually, you'd do this in your entry file, such as index.js or App.js:

```ts
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

### Hello React Navigation

React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.

Let's start by demonstrating the most common navigator, `createNativeStackNavigator`.

```sh
npm install @react-navigation/native-stack
```

#### Installing the elements library

The `@react-navigation/elements` library provides a set of components that are designed to work well with React Navigation. We'll use a few of these components in this guide. So let's install it first:

```sh
npm install @react-navigation/elements
```

#### Creating a native stack navigator

```js
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
```

#### Configuring the navigator

```js
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
```

Now our stack has two routes, a Home route and a Details route. A route can be specified by using the Screen component. The Screen component accepts a name prop which corresponds to the name of the route we will use to navigate, and a component prop which corresponds to the component it'll render.

#### Specifying options
Each screen in the navigator can specify some options for the navigator, such as the title to render in the header.

```js
<Stack.Navigator initialRouteName="Home">
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Overview' }}
  />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
```

Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a screenOptions prop to the navigator:

```js
<Stack.Navigator
  initialRouteName="Home"
  screenOptions={{
    headerStyle: { backgroundColor: 'tomato' },
  }}
>
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Overview' }}
  />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
```

#### Passing additional Props

Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:

Use React context and wrap the navigator with a context provider to pass data to the screens (recommended).

Use a render callback for the screen instead of specifying a component prop:

```js
<Stack.Screen name="Home">
  {(props) => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```


