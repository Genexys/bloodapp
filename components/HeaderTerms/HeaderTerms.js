import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ButtonBack from '../ButtonBack/ButtonBack';
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default function HeaderTerms({navigation}) {
    return (
        <View style={styles.header}>
            <View>
                <ButtonBack navigation={navigation}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        ...ifIphoneX({
            paddingTop: 50,
            height: 80,
        }, {
            height: 50,
            paddingTop: 15,
        }),
        paddingLeft: 10,
        backgroundColor: '#ffffff'
    },
});
