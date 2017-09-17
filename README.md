# react-native-iphone-x-helper
A library to help you design your react-native app for the iPhone X

## Installing ##
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

## Licence ##
**MIT**
