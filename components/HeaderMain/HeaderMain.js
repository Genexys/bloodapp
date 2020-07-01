import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import IconMenu from '../../Icon/IconMenu';
import MainLogo from '../../Icon/MainLogo';


export default function HeaderMain({navigation}) {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {navigation.navigate('Настройки')}}>
                    <IconMenu />
                </TouchableOpacity>

                <MainLogo width={87} height={25}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        paddingRight: 20,
        paddingLeft: 35,
        backgroundColor: '#3B84BE',
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    }
});
