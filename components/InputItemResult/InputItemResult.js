import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import ArrowDown from '../../Icon/ArrowDown'
import ArrowUp from '../../Icon/ArrowUp'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textContainer: {
    flexDirection: 'row',
    flex: 5,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#3B84BE',
    color: '#3B84BE',
  },

  textBold: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3B84BE',
  },

  textThin: {
    fontSize: 15,
    color: '#3B84BE',
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#3B84BE',
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#3B84BE',
  },
})

export default function InputItemResult({ short, long, status, num }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textBold}>{short}</Text>
        <Text style={styles.textThin}>{long}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.input}>{num}</Text>
        {status === 'lowValue' ? <ArrowDown width={10} height={9} /> : <ArrowUp width={10} height={9} />}
      </View>
    </View>
  )
}
