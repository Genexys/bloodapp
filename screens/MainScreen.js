import React, {useState} from 'react';
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
        flex: 1
    },

    formWrapper: {
        flex: 1,
        alignItems: 'center',
    },

    formInner: {
        // marginTop: 20,
        flex: 1,
    },

    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonInner: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        opacity: 0.5,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
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
                <View style={style.formWrapper}>
                    <MainLogo style={style.logo} width={164} height={53}/>
                    <MainForm navigation={navigation}/>
                </View>
                <View style={style.buttonWrapper} flex={1}>
                    <View style={style.buttonInner}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={() => navigation.navigate('Пользовательское соглашение')}
                        >
                            <Text style={style.buttonText}>Пользовательское соглашение</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
