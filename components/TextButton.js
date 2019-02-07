import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { purple } from '../utils/colors'

const styles = StyleSheet.create({
  text: {
    color: purple,
    fontWeight: 'bold',
    padding: 10,
  },
})
const TextButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
)

export default TextButton