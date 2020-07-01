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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    containerAge: {
        flex: 4,
    },

    containerMonth: {
        flex: 1,
        marginLeft: 15,
    },

    containerBtn: {
        alignSelf: 'stretch',
        marginTop: 50,
    }
});

export default function MainForm({navigation, typeForm}) {
    return (
        <View style={styles.container} >
            <Dropdown color={typeForm}/>
            <View style={styles.containerInput}>
                <View style={styles.containerAge}>
                    <Input type={'age'} placeholder={'Возраст'} color={typeForm}/>
                </View>
                <View style={styles.containerMonth}>
                    <Input type={'month'} placeholder={'Мес'} color={typeForm}/>
                </View>
            </View>

            {typeForm !== 'setting' ? <View style={styles.containerBtn}>
                <ButtonMain navigation={navigation}/>
            </View> : null}
        </View>
    );
}
