import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { addEntry, receiveEntries } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'

class History extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    fetchCalendarResults()
      .then(entries => dispatch(receiveEntries(entries)))
  }

  render() {
    return (
      <View>
        <Text>History</Text>
      </View>
    )
  }
}

export default connect()(History)