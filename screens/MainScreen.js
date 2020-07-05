import React, { useState } from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import MainLogo from '../Icon/MainLogo';
import MainForm from '../components/MainForm/MainForm';

const style = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },

    container: {
        width: '100%',
        paddingHorizontal: 36,
        backgroundColor: '#3B84BE',
    },

    containerInner: {
        // alignItems: 'center',
        flex: 1
    },

    formFrapper: {
        alignItems: 'center'
    },

    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        textAlign: 'center',
        opacity: 0.5,
    },

    button: {
        // marginTop: 10,
    },
});

export default function MainScreen({navigation}) {
    return (

        <ScrollView contentContainerStyle={style.containerStyle} style={style.container}>
            <View style={style.containerInner}>
                <View flex={1}/>
                <View style={style.formFrapper}>
                    <MainLogo style={style.logo} width={164} height={53}/>
                    <MainForm navigation={navigation}/>
                </View>
                <View style={style.buttonWrapper} flex={1}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => navigation.navigate('Пользовательское соглашение')}
                    >
                        <Text style={style.buttonText}>Пользовательское соглашение</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
