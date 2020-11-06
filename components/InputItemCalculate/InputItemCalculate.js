import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

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
    marginLeft: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#3B84BE',
  },

  input: {
    fontSize: 15,
    color: '#3B84BE',
  },
})

export default function InputItemCalculate({ short, long }) {
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <View style={[styles.textContainer, { borderBottomColor: value === '' ? '#3B84BE' : '#014F80' }]}>
        <Text style={[styles.textBold, { color: value === '' ? '#3B84BE' : '#014F80' }]}>{short}</Text>
        <Text style={[styles.textThin, { color: value === '' ? '#3B84BE' : '#014F80' }]}>{long}</Text>
      </View>

      <View style={[styles.inputContainer, { borderBottomColor: value === '' ? '#3B84BE' : '#014F80' }]}>
        <TextInput
          placeholderTextColor={value === '' ? '#3B84BE' : '#014F80'}
          placeholder={'0'}
          style={styles.input}
          keyboardType={'numeric'}
          value={value}
          onChangeText={value => {
            setValue(value)
          }}
        />
      </View>
    </View>
  )
}
