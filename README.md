[![npm version](https://badge.fury.io/js/react-native-iphone-x-helper.svg)](https://badge.fury.io/js/react-native-iphone-x-helper)

# react-native-iphone-x-helper
A library to help you design your react-native app for notched iPhones.

## Installing ##
`yarn add react-native-iphone-x-helper`

or

`npm i react-native-iphone-x-helper --save`

## API ##

### ifIphoneX(iphoneXStyle, \[regularStyle\]) ###
this method it for creating stylesheets with the iPhone X in mind

#### Parameters ####
**iphoneXStyle** - the style to apply if you're on iPhone X

**regularStyle (*optional*)** - the style to apply if you're not on iPhone X

#### Example ####
```js
// in style.js

import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
        backgroundColor: 'transparent',
        ...ifIphoneX({
            paddingTop: 50
        }, {
            paddingTop: 20
        })
    },
});
```

### isIphoneX() ###

**returns** - `true` if you running on an iPhone X.

#### Example ####
```js
import { isIphoneX } from 'react-native-iphone-x-helper'

// ...

if (isIphoneX()) {
    // do this...
} else {
    // do that...
}
```

### getStatusBarHeight() ###

#### Parameters ####
**returns** 
+ Android: `StatusBar.currentHeight`
+ iOS:


| StatusBarHeight | Devices | 
| -- | -- |
| 20 | Others |
| 44 | iPhoneX, Xs, Xs Max, 11 Pro, 11 Pro Max |
| 47 | iPhone12, 12 Pro, 12 Pro Max, 13, 13 Pro, 13 Pro Max, 14, 14 Plus |
| 48(Not Supported Now) | iPhone11, Xr |
| 50 | iPhone12 Mini, 13 Mini |
| 54 | iPhone14 Pro、14 Pro Max |


#### Example ####

```js
// in style.js

import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
        backgroundColor: 'transparent',
        paddingTop: getStatusBarHeight()
    },
});
```

***NOTE:*** If your using the the unsafe statusbar height, make sure to add 14dp of padding to your content, otherwise it's going to be flush against the notch

### getBottomSpace ###

**returns** - the height of the bottom to fit the safe area: `34` for iPhone X and `0` for other devices.

#### Example ####

```js
// in style.js

import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    totalview: {
        flex: 1,
        backgroundColor: 'transparent',
        marginBottom: getBottomSpace()
    },
});
```

### isDynamicIsland ###

**returns** the device whether contains the dynamic island. Specifically, 14 Pro 和 14 Pro Max by now

#### Example ####
```js
import { isDynamicIsland } from 'react-native-iphone-x-helper'

// ...

if (isDynamicIsland()) {
    // do this...
} else {
    // do that...
}
```

## Licence ##
**MIT**
