# React Native

About 75% of what you already know from building websites can be used in building mobile apps.

React Native is beginning to look like nextjs. You can do file based routing, API routes, server components

## React Native app are no longer slow

1. **JSI** - JavaScript interface, which replaces the old javascript bridge, allowing javascript to interact directly with native codes for faster and smoother performance.
2. **TurboModules**: Loads native modules when needed, reducing startup time and memory usage.
3. **Fabric**: Optimizes UI rendering, making animations, gestures and update faster and efficient.

Expo is also capable of doing "Over-the-air update", so your app users can get the latest code without updating the app in play store.

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

### TouchableWithoutFeedback

If you want to create a button that is visible, but you don't want it to show any feedback when pressed. It's very good for links and images.

```js
<TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
  <Text>Press Me</Text>
</TouchableWithoutFeedback>
```

### react-native-safe-area-context package

`<SafeAreaView>` works pretty well on most devices but sometimes it doesn't work well for some devices, which makes it not an optimal choice.

There is a package that is more reliable `react-native-safe-area-context`. It works across all devices even for the buttom bar.

```sh
npm i react-native-safe-area-context
```

### Images

React Native can handle images well except for SVG files, due to some native rendering limitations. If you want to use svgs in your project, there is a package called `react-native-svg`.

```js
npm i react-native-svg
```

### Installing Style packages

```sh
npm i nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

FROM DOC

```sh
npx expo install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
```

To add tailwindcss config

```sh
npx tailwindcss init
```

- Setup Tailwind CSS
Run npx tailwindcss init to create a tailwind.config.js file

Add the paths to all of your component files in your tailwind.config.js file.

tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a CSS file and add the Tailwind directives.

global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

info

From here onwards, replace ./global.css with the relative path to the CSS file you just created.

- Add the Babel preset

```js
babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

- Modify your metro.config.js

metro.config.js

```sh
npx expo customize metro.config.js
```

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })
```

- Import your CSS file

_layout.js

```js
import "./global.css"

export default App() {
  /* Your App */
}
```

- Modify your app.json

Switch the bundler to use the Metro bundler

```json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

Create a `nativewind-env.d.ts`

## Routing

Routing in expo is similar to routing in nextjs.