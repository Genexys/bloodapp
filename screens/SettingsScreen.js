import React, { useState } from 'react';
import {Text, ScrollView, View, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import Dash from 'react-native-dash';
import MainForm from '../components/MainForm/MainForm';
// import ToggleSwitch from 'toggle-switch-react-native'
import {Picker} from '@react-native-community/picker';
import ArrowPrev from "../Icon/ArrowPrev";
import ArrowNext from "../Icon/ArrowNext";

const style = StyleSheet.create({
    container: {
        padding: 36,
    },

    title: {
        marginBottom: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#014F80'
    },

    text: {
        marginBottom: 20,
        fontSize: 14,
        color: '#014F80',
    },

    formTitle: {
        fontSize: 12,
        color:'#014F80',
        opacity: 0.5
    },

    themeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },

    switchLabel: {
        flexGrow: 1,
        fontSize: 12,
        color:'#014F80',
    },

    buttonTerms: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },

    buttonTermsText: {
        flexGrow: 1,
        fontSize: 12,
        color:'#014F80',
    },

    iconTerms: {

    }
});

export default function SettingsScreen({ navigation }) {

    const [darkTheme, setDarkThem] = useState(false)
    const [unitValue, setUnitValue] = useState(null);

    return (
        <ScrollView>
            <View>
                <View style={style.container}>
                    <Text style={style.title}>
                        Настройки
                    </Text>

                    <View style={style.formContainer}>
                        <Text style={style.formTitle}>Личные данные</Text>
                        <MainForm typeForm={'setting'}/>
                    </View>
                </View>
                <Dash style={{width:'100%', height:1, opacity: 0.5}} dashColor={'#014F80'}/>

                <View style={style.container}>
                    <Text style={style.formTitle}>Настройки приложения</Text>

                    <View style={style.themeContainer}>
                        <Text style={style.switchLabel}>Темная Тема</Text>

                        <Switch
                            style={style.switch}
                            trackColor={{false: '#DFE4EB', true: '#014F80'}}
                            thumbColor="white"
                            ios_backgroundColor="gray"
                            onValueChange={(darkTheme) => setDarkThem(darkTheme)}
                            value={darkTheme}
                        />
                    </View>

                    <TouchableOpacity
                        style={style.buttonTerms}
                        onPress={() => navigation.navigate('Пользовательское соглашение')}
                    >
                        <Text style={style.buttonTermsText}>Пользовательское соглашение</Text>

                        <View style={style.iconTerms}>
                            <ArrowNext width={10} height={10}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
