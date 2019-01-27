import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

class AddEntry extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Add Entry</Text>
        {getMetricMetaInfo('bike').getIcon()}
      </SafeAreaView>
    )
  }
}

export default AddEntry