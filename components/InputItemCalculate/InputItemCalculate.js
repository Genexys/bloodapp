import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textContainer: {
        flexDirection: 'row',
        flex: 5,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#3B84BE',
        color: '#3B84BE'
    },

    textBold: {
        marginRight: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3B84BE'

    },

    textThin: {
        fontSize: 15,
        color: '#3B84BE'
    },

    inputContainer: {
        flex: 1,
        marginLeft: 10,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#3B84BE',
    },

    input: {
        fontSize: 15,
        color: '#3B84BE'
    },
});

export default function InputItemCalculate({short, long}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textBold}>{short}</Text>
                <Text style={styles.textThin}>{long}</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholderTextColor="#3B84BE"
                    placeholder={'0'}
                    style={styles.input}
                    keyboardType={'numeric'}
                />
            </View>
        </View>
    );
}
