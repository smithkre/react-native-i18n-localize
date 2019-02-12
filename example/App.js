/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
