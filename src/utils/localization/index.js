import languageES from './es.json'
import languageEN from './en.json'

export function getLanguageId(defaultLanguageId) {
  return localStorage.getItem(languageKey) || defaultLanguageId || navigator.language.slice(0, 2)
}

export function setCOTLanguageId(languageId) {
  return localStorage.setItem(languageKey, languageId)
}

export function getLanguageValue(key) {
  let value = ''

  const languageId = getLanguageId()

  if (languageId === 'es') {
    value = languageES[key]
  }
  if (languageId === 'en' || !languageId) {
    value = languageEN[key]
  }

  return value || key
}

export const SUPPORTED_LANGUAGES = [
  {
    'name': 'English',
    'id': 'en'
  },
  {
    'name': 'Español',
    'id': 'es'
  }
]

export const languageKey = 'cotLanguageId'
