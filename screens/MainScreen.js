import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MainLogo from '../Icon/MainLogo';
import MainForm from '../components/MainForm/MainForm';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 36,
        backgroundColor: '#3B84BE',
    },

    buttonText: {
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        opacity: 0.5,
    },

    button: {
        position: 'absolute',
        bottom: 110,
        marginTop: 10,
    },
});

export default function MainScreen({navigation}) {
    return (
        <View style={style.container}>

            <MainLogo style={style.logo} width={164} height={53}/>

            <MainForm navigation={navigation}/>

            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('Пользовательское соглашение')}
            >
                <Text style={style.buttonText}>Пользовательское соглашение</Text>
            </TouchableOpacity>
        </View>
    );
}
