import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 50,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        opacity: 0.5,
    },

    buttonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#3B84BE',
    },
});

export default function ButtonMain({onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                начать
            </Text>
        </TouchableOpacity>
    );
}
