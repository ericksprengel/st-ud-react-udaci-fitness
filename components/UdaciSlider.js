import React, { Component } from 'react'
import {
  Slider,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import MetricCounter from './MetricCounter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  slider: {
    flex: 1,
    marginRight: 20,
  },
})

const UdaciSlider = ({
  value,
  unit,
  onChange,
  step,
  max,
}) => (
  <View style={styles.container}>
    <Slider
      style={styles.slider}
      value={value}
      onValueChange={onChange}
      step={step}
      minimumValue={0}
      maximumValue={max}
    />
    <MetricCounter value={value} unit={unit} />
  </View>
)

export default UdaciSlider