import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ButtonBack from '../ButtonBack/ButtonBack';

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
        paddingTop: 15,
        paddingLeft: 10,
    },
});