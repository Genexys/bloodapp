import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { setUser as setUserAction } from '../../redux/user/actions'
import DropdownEl from '../DropdownEL/DropdownEL'
import ButtonMain from '../ButtonMain/ButtonMain'
import Input from '../Input/Input'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerAge: {
    flex: 4,
  },

  containerMonth: {
    flex: 1,
    marginLeft: 15,
  },

  containerBtn: {
    alignSelf: 'stretch',
    marginTop: 50,
  },
})

function MainForm({ navigation, typeForm, setUser, user }) {
  const [gender, setGender] = useState(user.gender)
  const [age, setAge] = useState(user.age)
  const [month, setMonth] = useState(user.month)
  const [disableButton, setDisableButton] = useState(user.formButton)

  const getValidate = () => {
    if (gender !== '' && age !== '' && parseInt(age) <= 99 && month !== '' && parseInt(month) <= 12) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }

  return (
    <View style={styles.container}>
      <DropdownEl value={gender} onChange={setGender} getValidate={getValidate} color={typeForm} />

      <View style={styles.containerInput}>
        <View style={styles.containerAge}>
          <Input
            type={'age'}
            placeholder={'Возраст'}
            color={typeForm}
            value={age}
            onChangeText={val => {
              setAge(val)
              getValidate()
            }}
          />
        </View>
        <View style={styles.containerMonth}>
          <Input
            type={'month'}
            placeholder={'Мес'}
            color={typeForm}
            value={month}
            onChangeText={val => {
              setMonth(val)
              getValidate()
            }}
          />
        </View>
      </View>

      {typeForm !== 'setting' && (
        <View style={[styles.containerBtn, { opacity: disableButton ? 0.5 : 1 }]}>
          <ButtonMain
            disableButton={disableButton}
            onPress={() => {
              setUser({
                gender,
                age,
                month,
              })
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
