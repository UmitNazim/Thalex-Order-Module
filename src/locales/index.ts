import { createI18n } from 'vue-i18n'
import en from './messages/en.json'
import nl from './messages/nl.json'
import datetimeFormats from './formats/datetime-formats'

export default createI18n({
  datetimeFormats,
  messages: { en, nl },
  silentFallbackWarn: true,
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE,
  silentTranslationWarn: process.env.NODE_ENV !== 'development',
})
