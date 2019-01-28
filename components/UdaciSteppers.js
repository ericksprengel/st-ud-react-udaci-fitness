import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {
  FontAwesome,
  Entypo,
} from '@expo//vector-icons'

const UdaciSteppers = ({
  value,
  unit,
  onDecrement,
  onIncrement,
  step,
  max,
}) => (
  <View style={{flexDirection: 'row'}}>
    <View>
      <TouchableOpacity onPress={onDecrement}>
        <FontAwesome name='minus' size={30} color='black' />
      </TouchableOpacity>
      <TouchableOpacity onPress={onIncrement}>
        <FontAwesome name='plus' size={30} color='black' />
      </TouchableOpacity>
    </View>
    <View>
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  </View>
)

export default UdaciSteppers