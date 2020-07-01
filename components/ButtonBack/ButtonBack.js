import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowPrev from '../../Icon/ArrowPrev';

const style = StyleSheet.create({
    buttonPrev: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonPrevText: {
        marginLeft: 15,
        fontSize: 17,
        color: '#3B84BE',
    },
})


export default function ButtonBack({navigation}) {

    return(
        <TouchableOpacity style={style.buttonPrev} onPress={navigation.goBack}>
            <ArrowPrev/>
            <Text style={style.buttonPrevText}>
                Скрыть
            </Text>
        </TouchableOpacity>
    )
}

