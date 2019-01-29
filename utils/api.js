import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY } from './_calendar'

const submitEntry = ({ key, entry }) => {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  )
}

const removeEntry = (key) => {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
}

export {
  submitEntry,
  removeEntry,
}