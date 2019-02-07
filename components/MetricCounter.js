import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { gray } from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const MetricCounter = ({ value, unit }) => (
  <View style={styles.container}>
    <Text style={{fontSize: 24}}>{value}</Text>
    <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
  </View>
)

export default MetricCounter