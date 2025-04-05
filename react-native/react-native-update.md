# React Native

About 75% of what you already know from building websites can be used in building mobile apps.

React Native is beginning to look like nextjs. You can do file based routing, API routes, server components

## React Native app are no longer slow

1. **JSI** - JavaScript interface, which replaces the old javascript bridge, allowing javascript to interact directly with native codes for faster and smoother performance.
2. **TurboModules**: Loads native modules when needed, reducing startup time and memory usage.
3. **Fabric**: Optimizes UI rendering, making animations, gestures and update faster and efficient.

## Tutorial

NativeWind allows you to use tailwindcss classes in ReactNative.

### TouchableOpacity

Creates a Button with transparent background.

```js
<TouchableOpacity onPress={() => alert("Pressed!")}>
  <Text>Press Me</Text>
</TouchableOpacity>
```

### TouchableHighlight

A button, when touched, it reduces the opacity of the background

```js
<TouchableHightlight onPress={() => alert("Pressed!")}>
  <Text>Press Me</Text>
</TouchableHightlight>
```
