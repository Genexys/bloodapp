import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import InputItemCalculate from '../components/InputItemCalculate/InputItemCalculate';

const styles = StyleSheet.create({
    containerInner: {
        paddingTop: 15,
        paddingRight: 35,
        paddingLeft: 35,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 123,
        marginTop: 10,
        backgroundColor: '#3B84BE',
        color: '#ffffff'
    },

    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#ffffff'
    }
});

export default function ScreenCalculate({navigation}) {
    const analyzes = [
        ['HGW', 'гемоглобин'],
        ['RBC', 'эритроциты'],
        ['WBC', 'лейкоциты'],
        ['HCT', 'гематокрит'],
        ['PLT', 'тромбоциты'],
        ['HGW', 'гемоглобин'],
        ['RBC', 'эритроциты'],
        ['WBC', 'лейкоциты'],
        ['HCT', 'гематокрит'],
        ['PLT', 'тромбоциты'],
        ['HGW', 'гемоглобин'],
        ['RBC', 'эритроциты'],
        ['WBC', 'лейкоциты'],
        ['HCT', 'гематокрит'],
        ['PLT', 'тромбоциты'],
        ['HGW', 'гемоглобин'],
        ['RBC', 'эритроциты'],
        ['WBC', 'лейкоциты'],
        ['HCT', 'гематокрит'],
        ['PLT', 'тромбоциты'],
        ['HGW', 'гемоглобин'],
        ['RBC', 'эритроциты'],
        ['WBC', 'лейкоциты'],
        ['HCT', 'гематокрит'],
        ['PLT', 'тромбоциты'],
        ['HGW', 'гемоглобин'],
        ['RBC', 'эритроциты'],
        ['WBC', 'лейкоциты'],
        ['HCT', 'гематокрит'],
        ['PLT', 'тромбоциты'],
    ];

    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={styles.containerInner}>
                    {analyzes.map((el, index) => <InputItemCalculate key={index} short={el[0]} long={el[1]}/>)}
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                          onPress={() => navigation.navigate('Результат')}>
                        Получить результат
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
