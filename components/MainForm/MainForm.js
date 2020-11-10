import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Text, Platform, Modal } from 'react-native'
import { connect } from 'react-redux'
import { setUser as setUserAction } from '../../redux/user/actions'
import DropdownEl from '../DropdownEL/DropdownEL'
import ButtonMain from '../ButtonMain/ButtonMain'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'
import store from '../../redux/store'

function MainForm({ navigation, typeForm, setUser, user }) {
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

  // Update profile if user was changed on settings screen
  useFocusEffect(
    useCallback(() => {
      const { gender, birthDay, formButton } = store.getState().user

      setGender(gender)
      setBirthday(birthDay)
      setDisableButton(formButton)
    }, []),
  )

  return (
    <View style={styles.container}>
      <DropdownEl
        value={gender ? gender : 'Выберите тип пациента'}
        onChange={setGender}
        getValidate={getValidate}
        color={typeForm}
      />

      {Platform.OS !== 'ios' ? (
        <>
          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode={'date'}
              minimumDate={new Date(1920, 0, 1)}
              maximumDate={new Date()}
              textColor={typeForm === 'setting' ? '#ffffff' : '#014F80'}
              onChange={({ type, nativeEvent }) => {
                setShowDatePicker(false)
                const date = new Date(nativeEvent.timestamp)
                pickedDay = { string: parseBirthDay(date), value: date }
                if (type === 'set') {
                  setBirthday(pickedDay)
                  getValidate()
                }
              }}
            />
          )}
        </>
      ) : (
        <Modal animationType='slide' transparent={true} visible={showDatePicker}>
          <>
            <View style={styles.centeredView}>
              <View style={[styles.iosModal, { backgroundColor: typeForm !== 'setting' ? '#ffffff' : '#014F80' }]}>
                <DateTimePicker
                  value={new Date()}
                  mode={'date'}
                  minimumDate={new Date(1920, 0, 1)}
                  maximumDate={new Date()}
                  textColor={typeForm === 'setting' ? '#ffffff' : '#014F80'}
                  onChange={({ _type, nativeEvent }) => {
                    const date = new Date(nativeEvent.timestamp)
                    pickedDay = { string: parseBirthDay(date), value: date }
                  }}
                />

                <View style={styles.modalBtnContainer}>
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
              </View>
            </View>
          </>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 15,
  },
  iosModal: {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    borderRadius: 4,
  },
})
