import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setUser as setUserAction } from '../redux/user/actions'
import InputItemResult from '../components/InputItemResult/InputItemResult'
import Dash from 'react-native-dash'
import { useFonts } from 'expo-font'

function ScreenResult({ navigation, route, user, setUser }) {
  const results = route.params

  const [loaded] = useFonts({
    Georgia: require('../assets/fonts/Georgia.ttf'),
  })

  const analyzes = [
    ['HGW', 'гемоглобин'],
    ['RBC', 'эритроциты'],
    ['WBC', 'лейкоциты'],
    ['HCT', 'гематокрит'],
    ['PLT', 'тромбоциты'],
  ]

  const list1 = [
    'Увеличение (лейкоцитоз) бывает при:',
    'острых воспалительных процессах; гнойных процессах, сепсисе;',
    'многих инфекционных заболеваниях вирусной, бактериальной, грибковой и другой этиологии;',
    'злокачественных новообразованиях;',
    'инфаркте миокарда;',
  ]

  const list2 = [
    'кровопотере;',
    'анемии;',
    'гидремия(внутривенное введение большого количества жидкости);',
    'при оттоке тканевой жидкости в кровеносное русло при уменьшении отеков(терапия мочегонными препаратами);',
    'снижении интенсивности образования эритроцитов в костном мозге;',
    'ускоренном разрушении эритроцитов.',
  ]

  if (!loaded) {
    return null
  }

  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.containerInner}>
          <Text style={[styles.titleScreen, { fontFamily: 'Georgia' }]}>Отклонения</Text>
          <Text style={styles.text}>
            для {user.gender}, {user.age} лет
          </Text>
        </View>

        <View style={styles.containerInner}>
          {analyzes.map((el, index) => (
            <InputItemResult key={index} short={el[0]} long={el[1]} num={Math.floor(Math.random() * 30)} />
          ))}
        </View>
        <Dash style={{ width: '100%', height: 1, opacity: 0.5, marginBottom: 20 }} dashColor={'#014F80'} />
        <View style={styles.containerInner}>
          <View style={styles.textContainer}>
            <Text style={[styles.title, { fontFamily: 'Georgia' }]}>Пояснения:</Text>
            <Text style={styles.text}>
              <Text style={styles.textBold}>Лейкоциты</Text>
              <Text>
                {' '}
                WBC— клетки крови, Основной функцией лейкоцитов является защита организма от чужих для него антигенов (в
                том числе, микроорганизмов, опухолевых клеток; эффект проявляется и в направлении клеток трансплантата).
              </Text>
            </Text>
          </View>

          <View style={styles.textContainer}>
            {list1.map((textItem, index) => (
              <Text key={index} style={styles.text}>
                &ndash;{textItem}
              </Text>
            ))}
            <View style={styles.markerWrapper}>
              <View style={styles.wbc}>
                <Text style={styles.markerText}>WBC</Text>
              </View>
              <View style={styles.hct}>
                <Text style={styles.markerText}>HCT</Text>
              </View>
            </View>
            <Text style={styles.text}>– после больших физических нагрузок.</Text>
          </View>
        </View>

        <Dash style={{ width: '100%', height: 1, opacity: 0.5, marginBottom: 20 }} dashColor={'#014F80'} />

        <View style={styles.containerInner}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Эритроциты RBC клетки, которые участвуют в транспорте кислорода в ткани и поддерживают в организме
              процессы биологического окисления.
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Уменьшение содержания эритроцитов в крови наблюдается при:</Text>
            {list2.map((textItem, index) => (
              <Text key={index} style={styles.text}>
                &ndash;{textItem}
              </Text>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setUser({
              age: '',
              gender: '',
              month: '',
            })

            navigation.navigate('Главная')
          }}
        >
          <Text style={styles.buttonText}>начать заново</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, {
  setUser: setUserAction,
})(ScreenResult)

const styles = StyleSheet.create({
  containerInner: {
    paddingTop: 15,
    paddingRight: 35,
    paddingLeft: 35,
  },

  titleScreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014F80',
  },

  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014F80',
  },

  textContainer: {
    marginBottom: 40,
  },

  text: {
    fontSize: 14,
    lineHeight: 24,
    color: '#014F80',
  },

  textBold: {
    fontWeight: 'bold',
    color: '#014F80',
  },

  markerWrapper: {
    flexDirection: 'row',
  },

  wbc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    width: 52,
    padding: 2,
    borderRadius: 11,
    backgroundColor: '#FF9500',
    color: '#ffffff',
  },

  hct: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    padding: 2,
    borderRadius: 11,
    backgroundColor: '#3B84BE',
    color: '#ffffff',
  },

  markerText: {
    color: '#ffffff',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
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
