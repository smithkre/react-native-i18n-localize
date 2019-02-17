import React, { Component } from 'react'
import _i81n from 'i18n-js'
import EventEmitter from 'tiny-emitter'

class _I18nLocalize extends EventEmitter {
  availableLanguages = []
  langI18n = _i81n

  constructor(...args) {
    super(...args)
  }

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
    
    // Update language first time
    this.emit('changeLanguage')
  }

  setLanguage = (language) => {
    this.langI18n.locale = language
    this.emit('changeLanguage')
  }

  getAvailableLocale = () => {
    return this.availableLanguages
  }

  getLocale = () => {
    return this.langI18n.locale
  }

  triggerEvent = () => {
    this.events.forEach(event => {
      event.apply(null)
    })
  }
}

export const I18nLocalize = new _I18nLocalize()

export const withLanguage = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount = () => {
      I18nLocalize.on('changeLanguage', this.handleChange)
    }

    componentWillUnmount = () => {
      I18nLocalize.off('changeLanguage', this.handleChange)
    }

    handleChange = () => {
      this.forceUpdate()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export const i18n = I18nLocalize.langI18n

export default {
  i18n,
  I18nLocalize,
  withLanguage
}