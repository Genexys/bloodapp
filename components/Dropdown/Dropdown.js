import React, {useState} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
// import {Picker} from '@react-native-community/picker';

export default function Dropdown({color}) {
    const [gender, setGender] = useState(null);

    const style = StyleSheet.create({

        container: {
            alignSelf: 'stretch',
            marginBottom: 30,
            borderBottomWidth: 1,
            borderBottomColor: (color !== 'setting') ? '#ffffff' : '#014F80',
        },

        pickerContainer: {
            alignSelf: 'stretch',
            height: 50,
            padding: 0,
            fontSize: 15,
            color: (color !== 'setting') ? '#ffffff' : '#014F80',
        },

        pickerItem: {
            padding: 0,
            fontSize: 15,
        },
    });

    console.log(gender)

    return(
        <View style={style.container}>
            <Picker
                selectedValue={gender}
                style={style.pickerContainer}
                placeholder={{}}
                onValueChange={(itemValue, itemIndex) =>
                    setGender(itemValue)
                }
                itemStyle={{
                    padding: 0,
                    backgroundColor: 'red',
                }}

                itemTextStyle={{
                    padding: 0,
                    color: 'red',
                }}
            >
                <Picker.Item label="Мужчина" value="Мужчина" />
                <Picker.Item label="Женщина" value="Женщина" />
                <Picker.Item label="Женщина в положении" value="Женщина в положении" />
                <Picker.Item label="Рёбенок" value="Рёбенок" />
                <Picker.Item label="Новорожденный" value="Новорожденный" />
            </Picker>


        </View>
    );
}
