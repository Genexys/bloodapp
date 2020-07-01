import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {},

    textContainer: {},

    textBold: {},

    textThin: {},

    inputContainer: {},

    input: {},
});

export default function InputItemCalculate() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text>HGW</Text>
                <Text>гемоглобин</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholderTextColor="#ffffff"
                    placeholder={'0'}
                    style={styles.input}
                />
            </View>
        </View>
    );
}
