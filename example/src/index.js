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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginBottom: 16,
    fontSize: 20
  }
})

export default withLanguage(Example)
