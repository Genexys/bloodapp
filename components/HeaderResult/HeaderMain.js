import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Share } from 'react-native'
import { connect } from 'react-redux'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import MainLogoHeader from '../../Icon/MainLogoHeader'
import ArrowPrevWhite from '../../Icon/ArrowPrevWhite'
import Action from '../../Icon/Action'
import store from '../../redux/store'

const getMessage = user => {
  const result = Object.entries(user.lastResult).filter(analize => analize[1].status !== 'normal')
  const title = 'Результаты расшифровки анализов в приложении "Кровь - общий анализ"'
  const userType = `Пациент: ${user.gender === 'male' ? 'Мужчина' : 'Женщина'}, дата рождения: ${user.birthDay.string}`
  if (!result.length) {
    return {
      title,
      message: `${title}\n\n${userType}\n\nРезультат: Все показатели в норме`,
    }
  }

  const resultMessage = result.reduce((acc, [label, result]) => {
    return `${acc}${label} ${result.name}\n${
      result.status === 'lowValue' ? 'Показатель понижен' : 'Показатель понижен'
    }\n\n${result.message}\n\n`
  }, '')

  return {
    title,
    message: `${title}\n\n${userType}\n\nРезультат:\n${resultMessage}`,
  }
}

function HeaderResult({ navigation }) {
  const onShare = async () => {
    try {
      const sharingMessage = getMessage(store.getState().user)
      await Share.share(
        {
          message: sharingMessage.message,
          title: sharingMessage.title,
        },
        { subject: sharingMessage.title, dialogTitle: sharingMessage.title },
      )
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.header}>
      <View style={{ ...styles.container }}>
        <TouchableOpacity
          style={styles.buttonPrev}
          onPress={() => {
            navigation.navigate('Форма расчета')
          }}
          hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
        >
          <ArrowPrevWhite width={12} height={20} />
          <Text style={styles.buttonPrevText}>Назад</Text>
        </TouchableOpacity>

        <View flex={1} style={styles.logoContainer}>
          <MainLogoHeader width={87} height={25} />
        </View>

        <TouchableOpacity onPress={onShare}>
          <Action width={19} height={26} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(HeaderResult)

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    ...ifIphoneX(
      {
        paddingTop: 30,
        height: 80,
      },
      {
        height: 50,
      },
    ),
    paddingRight: 20,
    paddingLeft: 15,
    backgroundColor: '#3B84BE',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    paddingRight: 40,
  },

  buttonPrev: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonPrevText: {
    marginLeft: 15,
    fontSize: 17,
    color: '#ffffff',
  },
})
