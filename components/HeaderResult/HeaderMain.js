import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text  } from 'react-native';
import { connect } from 'react-redux'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import MainLogoHeader from '../../Icon/MainLogoHeader';
import ArrowPrevWhite from "../../Icon/ArrowPrevWhite";
import Action from "../../Icon/Action";


const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        ...ifIphoneX({
            paddingTop: 30,
            height: 80,
        }, {
            height: 50,
        }),
        paddingRight: 20,
        paddingLeft: 15,
        backgroundColor: '#3B84BE',
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        paddingRight: 40,
    },

    buttonPrev: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonPrevText: {
        marginLeft: 15,
        fontSize: 17,
        color: '#ffffff',
    },
});

function HeaderResult({navigation}) {

    return (
        <View style={styles.header}>
            <View style={{...styles.container}}>
                <TouchableOpacity style={styles.buttonPrev} onPress={() => {
                    navigation.navigate('Форма расчета');
                }} hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
                    <ArrowPrevWhite width={12} height={20}/>
                    <Text style={styles.buttonPrevText}>Назад</Text>
                </TouchableOpacity>

                <View flex={1} style={styles.logoContainer}>
                    <MainLogoHeader width={87} height={25}/>
                </View>

                <Action width={19} height={26}/>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(HeaderResult)
