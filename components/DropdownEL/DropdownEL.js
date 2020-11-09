import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

export default function DropdownEl({ color, value, onChange, getValidate }) {
  let values = [
    /*  {
            label: 'Новорожденный',
            value: 'Новорожденный'
        }, {
            label: 'Ребёнок',
            value: 'Ребёнок'
        }, */ {
      label: 'Женщина',
      value: 'female',
    },
    /*  {
            label: 'Женщина в положении',
            value: 'Женщина в положении'
        }, */
    {
      label: 'Мужчина',
      value: 'male',
    },
  ]

  const style = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      height: 60,
      marginBottom: 30,
      padding: 0,
      borderBottomWidth: 1,
    },

    pickerContainer: {
      alignSelf: 'stretch',
      height: 30,
      padding: 0,
      fontSize: 15,
      color: color !== 'setting' ? '#ffffff' : '#014F80',
    },

    pickerItem: {
      padding: 0,
      fontSize: 15,
    },

    textColor: {
      color: color !== 'setting' ? '#ffffff' : '#014F80',
    },
  })

  return (
    <View style={[style.container, { borderBottomColor: color !== 'setting' ? '#ffffff' : '#014F80' }]}>
      <Dropdown
        data={values}
        value={value}
        itemColor={'#3B84BE'}
        baseColor={color !== 'setting' ? '#ffffff' : '#014F80'}
        selectedItemColor={'#014F80'}
        textColor={color !== 'setting' ? '#ffffff' : '#014F80'}
        itemPadding={5}
        inputContainerStyle={{ borderBottomColor: 'transparent', paddingVertical: 0, margin: 0 }}
        containerStyle={{ padding: 0, margin: 0 }}
        labelPadding={0}
        useNativeDriver={true}
        onChangeText={value => {
          onChange(value)
          getValidate()
        }}
      />
    </View>
  )
}
