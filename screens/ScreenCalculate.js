import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import InputItemCalculate from '../components/InputItemCalculate/InputItemCalculate'
import Dash from 'react-native-dash'
import { FlatList } from 'react-native-gesture-handler'

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

export default function ScreenCalculate({ navigation }) {
  const analyzes = [
    ['HGW', 'гемоглобин'],
    ['RBC', 'эритроциты'],
    ['WBC', 'лейкоциты'],
    // ['HCT', 'гематокрит'],
    // ['PLT', 'тромбоциты'],
  ]

  const ListFooterComponent = (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Результат')}>
      <Text style={styles.buttonText}>Получить результат</Text>
    </TouchableOpacity>
  )

  return (
    // <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
    //   <View style={styles.containerInner}>
    //     {analyzes.map((el, index) => {
    //       if (index % 5 === 5 - 1) {
    //         return (
    //           <View>
    //             <InputItemCalculate key={index} short={el[0]} long={el[1]} />
    //             <Dash style={{ width: '100%', height: 1, opacity: 0.5, marginBottom: 20 }} dashColor={'#014F80'} />
    //           </View>
    //         )
    //       } else {
    //         return <InputItemCalculate key={index} short={el[0]} long={el[1]} />
    //       }
    //     })}
    //   </View>
    //   <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Результат')}>
    //     <Text style={styles.buttonText}>Получить результат</Text>
    //   </TouchableOpacity>
    // </ScrollView>
    <>
      <FlatList
        data={analyzes}
        keyExtractor={item => item[0]}
        renderItem={({ item }) => {
          return <InputItemCalculate short={item[0]} long={item[1]} />
        }}
        contentContainerStyle={styles.containerInner}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Результат')}>
        <Text style={styles.buttonText}>Получить результат</Text>
      </TouchableOpacity>
    </>
  )
}
