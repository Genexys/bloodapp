import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Dropdown from '../Dropdown/Dropdown';
import ButtonMain from '../ButtonMain/ButtonMain';
import Input from '../Input/Input';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    containerInput: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    containerAge: {
        width: 220,
    },

    containerMonth: {
        width: 60,
    },

    containerBtn: {
        marginTop: 50,
    }
});

export default function MainForm({navigation}) {
    return (
        <View style={styles.container}>
            <Dropdown />
            <View style={styles.containerInput}>
                <View style={styles.containerAge}>
                    <Input type={'age'} placeholder={'Возраст'}/>
                </View>
                <View style={styles.containerMonth}>
                    <Input type={'month'} placeholder={'Мес'}/>
                </View>
            </View>

            <View style={styles.containerBtn}>
                <ButtonMain navigation={navigation}/>
            </View>
        </View>
    );
}
