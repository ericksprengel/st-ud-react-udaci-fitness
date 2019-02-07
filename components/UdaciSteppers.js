import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  FontAwesome,
  Entypo,
} from '@expo//vector-icons'
import { gray, purple, white } from '../utils/colors'
import MetricCounter from './MetricCounter'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
  },
  iosBtn: {
    padding: 5,
    paddingHorizontal: 25,
    backgroundColor: white,
    borderRadius: 5,
    borderColor: purple,
    borderWidth: 1,
  },
})

const stylesBtn = Platform.OS === 'ios'
  ? styles.iosBtn
  : styles.androidBtn

const fontColorBtn = Platform.OS === 'ios'
? purple
: white

const ButtonIcon = Platform.OS === 'ios'
? FontAwesome
: Entypo

const UdaciSteppers = ({
  value,
  unit,
  onDecrement,
  onIncrement,
  step,
  max,
}) => (
  <View style={[styles.row, { justifyContent: 'space-between'}]}>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={[
          stylesBtn,
          {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRightWidth: 0
          }
        ]}
        onPress={onDecrement}
      >
        <ButtonIcon name='minus' size={30} color={fontColorBtn} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          stylesBtn,
          {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }
        ]}
        onPress={onIncrement}
      >
        <ButtonIcon name='plus' size={30} color={fontColorBtn} />
      </TouchableOpacity>
    </View>
    <MetricCounter value={value} unit={unit} />
  </View>
)

export default UdaciSteppers