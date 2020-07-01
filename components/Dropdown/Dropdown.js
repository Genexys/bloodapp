import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function Dropdown({}) {
    const [gender, setGender] = useState(null);

    const style = StyleSheet.create({

        container: {
            width: 300,
            marginBottom: 30,
            borderBottomWidth: 1,
            borderBottomColor: '#ffffff',
        },

        pickerContainer: {
            width: 300,
            height: 50,
            paddingBottom: 0,
            paddingLeft: 0,
            color: '#ffffff',
        },

        pickerItem: {
            padding: 0,
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
                }>
                <Picker.Item label="Мужчина" value="Мужчина" />
                <Picker.Item label="Женщина" value="Женщина" />
                <Picker.Item label="Женщина в положении" value="Женщина в положении" />
                <Picker.Item label="Рёбенок" value="Рёбенок" />
                <Picker.Item label="Новорожденный" value="Новорожденный" />
            </Picker>
        </View>
    );
}
