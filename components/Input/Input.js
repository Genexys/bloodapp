import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function Input({placeholder, color}) {

    const styles = StyleSheet.create({

        container: {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: (color !== 'setting') ? '#ffffff' : '#014F80'
        },

        input: {
            width: '100%',
            fontSize: 15,
            color: (color !== 'setting') ? '#ffffff' : '#014F80',
        },
    });

    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor ={(color !== 'setting') ? '#ffffff' : '#014F80'}
                placeholder={placeholder}
                style={styles.input}
                keyboardType={'numeric'}
            />
        </View>
    );
}
