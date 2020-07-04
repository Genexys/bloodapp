import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView  } from 'react-native';
// import { SafeAreaView, useSafeArea  } from 'react-native-safe-area-context';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import IconMenu from '../../Icon/IconMenu';
import MainLogo from '../../Icon/MainLogo';


const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        ...ifIphoneX({
            paddingTop: 20,
            height: 80,
        }, {
            height: 50,
        }),
        paddingRight: 20,
        paddingLeft: 35,
        backgroundColor: '#3B84BE',
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    }
});

export default function HeaderMain({navigation}) {
    // const insets = useSafeArea();

    return (
        <View style={styles.header}>
            <View style={{...styles.container}}>
                <TouchableOpacity  onPress={() => {navigation.navigate('Настройки')}}>
                    <IconMenu />
                </TouchableOpacity>

                <MainLogo width={87} height={25}/>
            </View>
        </View>
    )
}
