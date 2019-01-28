import React, { Component } from 'react'
import {
  Slider,
  View,
  Text,
} from 'react-native'

const UdaciSlider = ({
  value,
  unit,
  onChange,
  step,
  max,
}) => (
  <View>
    <Slider
      value={value}
      onValueChange={onChange}
      step={step}
      minimumValue={0}
      maximumValue={max}
    />
    <Text>{value}</Text>
    <Text>{unit}</Text>
  </View>
)

export default UdaciSlider