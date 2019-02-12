import React, { Component } from 'react'
import _i81n from 'i18n-js'

class _I18nEvent extends Object {
  events = []
  availableLanguages = []
  langI18n = _i81n

  initialLanguage = (languagePack, defaultLocale = null) => {
    this.availableLanguages = Object.keys(languagePack)

    if(defaultLocale) {
      this.langI18n.locale = defaultLocale
    }
    else if(this.availableLanguages.length > 0) {
      this.langI18n.locale = this.availableLanguages[0]
    }
    
    this.langI18n.fallbacks = true
    this.langI18n.translations = languagePack
  }

  getAvailableLocale = () => {
    return this.availableLanguages
  }

  getLocale = () => {
    return this.langI18n.locale
  }

  switchLanguage = (language) => {
    this.langI18n.locale = language
    this.triggerEvent()
  }

  addEventListener = (handler) => {
    if(!this.events.includes(handler)) {
      this.events.push(handler)
    }
  }

  removeEventListener = (handler) => {
    const index = this.events.indexOf(handler)
    if(index != -1) {
      this.events.splice(index, 1)
    }
  }

  triggerEvent = () => {
    this.events.forEach(event => {
      event.apply(null)
    })
  }
}

export const I18nEvent = new _I18nEvent()

export const withLanguage = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount = () => {
      I18nEvent.addEventListener(this.handleChange)
    }

    componentWillUnmount = () => {
      I18nEvent.removeEventListener(this.handleChange)
    }

    handleChange = () => {
      this.forceUpdate()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export const i18n = I18nEvent.langI18n

export default {
  i18n,
  I18nEvent,
  withLanguage
}