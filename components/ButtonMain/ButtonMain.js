import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 50,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    opacity: 0.5,
  },

  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#3B84BE',
  },
})

export default function ButtonMain({ onPress, disableButton }) {
  return (
    <TouchableOpacity
      style={[styles.button, { opacity: disableButton ? 1 : 1 }]}
      disabled={disableButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>начать</Text>
    </TouchableOpacity>
  )
}
