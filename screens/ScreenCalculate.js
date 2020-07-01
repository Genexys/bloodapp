import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputItemCalculate from '../InputItemCalculate/InputItemCalculate';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10
    }
});

export default function ScreenCalculate() {
    return (
        <View>
            <InputItemCalculate />
        </View>
    );
}
