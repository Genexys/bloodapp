import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import InputItemCalculate from '../components/InputItemCalculate/InputItemCalculate'
import { FlatList } from 'react-native-gesture-handler'
import { analyzesList, getResult } from '../analyzes'
import store from '../redux/store'

const getAge = () => {
  const age = Date.now() - Date.parse(store.getState().user.birthDay.value)
  const ageInDays = Math.floor(age / 86400000) // ammout of ms in 1 day
  const ageInYears = Math.floor(ageInDays / 365) // ammout of days in 1 year
  return { ageInYears, ageInDays }
}

export default function ScreenCalculate({ navigation }) {
  console.warn(getAge())
  const listOfValues = {}

  return (
    <>
      <FlatList
        data={analyzesList}
        keyExtractor={item => item.label}
        renderItem={({ item }) => {
          return <InputItemCalculate listOfValues={listOfValues} short={item.label} long={item.name} />
        }}
        contentContainerStyle={styles.containerInner}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Результат', { result: getResult(listOfValues, getAge()) })}
      >
        <Text style={styles.buttonText}>Получить результат</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  containerInner: {
    paddingTop: 15,
    paddingRight: 35,
    paddingLeft: 35,
    flexGrow: 1,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 123,
    marginTop: 10,
    backgroundColor: '#3B84BE',
    color: '#ffffff',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
})
