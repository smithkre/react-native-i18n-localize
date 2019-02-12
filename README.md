# react-native-i18n-localize

A pure javascript language control for your React Native app localization.

[![npm version](https://badge.fury.io/js/react-native-i18n-localize.svg)](https://badge.fury.io/js/react-native-localize) ![MIT](https://img.shields.io/dub/l/vibe-d.svg)  

## Installation

#### Using npm

```bash
$ npm install --save react-native-i18n-localize
```

#### Using yarn

```bash
$ yarn add react-native-i18n-localize
```

## Example

#### 1. Create your translation file in project

en.json
```json
{
  "Language 1": "Language 1",
  "Switch": "เปลี่ยนเป็นภาษาไทย"
}
```

th.json
```json
{
  "Language 1": "ภาษาที่ 1",
  "Switch": "Switch to English"
}
```

#### 2. Inject translation file to App.js
```js
import React, {Component} from 'react'
import { StyleSheet, View} from 'react-native'
import { I18nLocalize } from 'react-native-i18n-localize'

import en from './src/translations/en.json'
import th from './src/translations/th.json'

import MainScreen from './src'

I18nLocalize.initialLanguage({ en, th })

export default class App extends Component {
  componentDidMount() {
    
    // I18nLocalize.setLanguage('th')
  }
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    )
  }
}

...

```

#### 3. Wrapping your component for forcing update after change language
```js
export default withLanguage(Example)
```

#### 4. Switching language with this method
```js
import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { I18nLocalize, i18n, withLanguage } from 'react-native-i18n-localize'

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{ i18n.t('Language 1') }</Text>
        <Button onPress={this.trigger} title={i18n.t('Switch')} />
      </View>
    )
  }

  trigger = () => {
    if(I18nLocalize.getLocale() === 'th') {
      I18nLocalize.setLanguage('en')
    }
    else {
      I18nLocalize.setLanguage('th')
    }
  }
}
```

Browse the files in the [/example](https://github.com/smithkre/react-native-i18n-localize/tree/master/example) directory.
