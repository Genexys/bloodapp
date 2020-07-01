import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function Input({placeholder}) {

    const styles = StyleSheet.create({

        container: {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#ffffff'
        },

        input: {
            width: '100%',
            color: '#ffffff',
        },
    });

    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor = "#ffffff"
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    );
}
