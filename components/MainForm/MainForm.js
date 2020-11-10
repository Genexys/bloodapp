import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { setUser as setUserAction } from '../../redux/user/actions'
import DropdownEl from '../DropdownEL/DropdownEL'
import ButtonMain from '../ButtonMain/ButtonMain'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  containerAge: {
    width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },

  text: {
    fontSize: 15,
    textAlign: 'left',
  },

  containerBtn: {
    alignSelf: 'stretch',
    marginTop: 50,
  },
})

function MainForm({ navigation, route, typeForm, setUser, user }) {
  const [gender, setGender] = useState(user.gender)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [birthDay, setBirthday] = useState(user.birthDay)
  const [disableButton, setDisableButton] = useState(user.formButton)

  const parseBirthDay = date => {
    const day = date.getDate()
    const month = date.getMonth() + 1

    const dayFormat = day < 10 ? `0${day}` : day
    const monthFormat = month < 10 ? `0${month}` : month
    return `${dayFormat}.${monthFormat}.${date.getFullYear()}`
  }

  let pickedDay = { string: parseBirthDay(new Date()), value: new Date() }

  const getValidate = () => {
    if (gender !== 'Выберите тип пациента' && birthDay.string !== 'Дата рождения') {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }

  useEffect(() => {
    setUser({
      gender,
      birthDay,
      formButton: disableButton,
    })
  }, [gender, birthDay, disableButton])

  return (
    <View style={styles.container}>
      <DropdownEl
        value={gender ? gender : 'Выберите тип пациента'}
        onChange={setGender}
        getValidate={getValidate}
        color={typeForm}
      />
      {showDatePicker && (
        <View
          style={{
            zIndex: 2,
            position: 'absolute',
            width: '100%',
            backgroundColor: typeForm !== 'setting' ? '#ffffff' : '#014F80',
            borderRadius: 4,
          }}
        >
          <DateTimePicker
            value={new Date()}
            mode={'date'}
            minimumDate={new Date(1920, 0, 1)}
            maximumDate={new Date()}
            textColor={typeForm === 'setting' ? '#ffffff' : '#014F80'}
            onChange={({ type, nativeEvent }) => {
              const date = new Date(nativeEvent.timestamp)
              pickedDay = { string: parseBirthDay(date), value: date }
              if (type === 'set') {
                setBirthday(pickedDay)
                setShowDatePicker(false)
                getValidate()
              }
            }}
          />
          {Platform.OS === 'ios' && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flex: 1,
                paddingBottom: 5,
              }}
            >
              <View style={{ flexGrow: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    setBirthday(pickedDay)
                    setShowDatePicker(false)
                    getValidate()
                  }}
                >
                  <Text
                    style={{
                      color: typeForm === 'setting' ? '#ffffff' : '#014F80',
                      textAlign: 'center',
                      fontSize: 20,
                    }}
                  >
                    Сохранить
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexGrow: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    setShowDatePicker(false)
                  }}
                >
                  <Text
                    style={{
                      color: typeForm === 'setting' ? '#ffffff' : '#014F80',
                      textAlign: 'center',
                      fontSize: 20,
                    }}
                  >
                    Отменить
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
      <View
        onTouchStart={() => setShowDatePicker(true)}
        style={[
          styles.containerAge,
          {
            borderBottomColor: typeForm !== 'setting' ? '#ffffff' : '#014F80',
          },
        ]}
      >
        <Text style={[styles.text, { color: typeForm !== 'setting' ? '#ffffff' : '#014F80' }]}>{birthDay.string}</Text>
      </View>

      {typeForm !== 'setting' && (
        <View style={[styles.containerBtn, { opacity: disableButton ? 0.5 : 1 }]}>
          <ButtonMain
            disableButton={disableButton}
            onPress={() => {
              navigation.navigate('Форма расчета')
            }}
          />
        </View>
      )}
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, {
  setUser: setUserAction,
})(MainForm)
