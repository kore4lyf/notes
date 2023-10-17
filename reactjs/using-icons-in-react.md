# React Icons 

## 0.  React Icons 
```sh 
npm install react-icons --save 
``` 

```js 
import { IconContext } from "react-icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>; 
```  

Key	Default	Notes
color	undefined (inherit)	
size	1em	
className	undefined	
style	undefined	Can overwrite size and color
attr	undefined	Overwritten by other attributes
title	undefined	Icon description for accessibility



## 1. Using Fontawesome

```sh
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/react-fontawesome
``` 



Example usage
```js

// import an icon in an individual component

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCoffee} />
ReactDOM.render(element, document.body)

// or import it in your App.js file for global use

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)
```  


## 2. Unicons 

```sh
npm install --save @iconscout/react-unicons 
```


Example usage
```js
// use individual icons

import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'

const App = () => {
  return <UilReact size="140" color="#61DAFB" />
};

export default App;

// or use as a full package

import React from 'react';
import * as Unicons from '@iconscout/react-unicons';

const App = () => {
  return <Unicons.UilReact />
};

export default App;
``` 



## 3. React Feather 
``` sh 
npm i react-feather 
``` 


```js 
import React from 'react';
import { Camera } from 'react-feather';

const App = () => {
  return <Camera />
};

export default App; 
``` 


## 4. Material UI 

```sh 
npm install @material-ui/core

```

```js 
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

//or

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

``` 


## 5. Styled Icons 

```sh 
npm install styled-icons --save
``` 

```js 
import React, {Fragment} from 'react'
import {AccountCircle, Lock} from '@styled-icons/material'

const App = () => (
  <Fragment>
    <AccountCircle />
    <Lock />
  </Fragment>
)  
``` 


## 6. IconPark 
```sh 
npm install @icon-park/react --save

``` 

```js 
import {Home} from '@icon-park/react';

// examples
<Home/>
<Home theme="filled"/>

``` 


## 7. CoreUI for React 
```sh 
// CoreUI Icons library
npm install @coreui/icons

// CIcon component
npm install @coreui/icons-react
``` 

```js 
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';

...
<CIcon icon={cilList} size="xl"/>
<CIcon icon={cilShieldAlt} size="xl"/>
...
``` 



## 8. Iconify 
```sh 
npm install --save-dev @iconify/react
``` 

```js 
import { Icon } from '@iconify/react';
import home from '@iconify-icons/mdi-light/home';

function renderHomeIcon() {
	return <Icon icon={home} />;
}
``` 



## 9. Heroicons 
```sh 
npm install @heroicons/react
``` 

```js 
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500"/>
      <p>...</p>
    </div>
  )
```