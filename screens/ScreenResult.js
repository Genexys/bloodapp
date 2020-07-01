import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import InputItemResult from '../components/InputItemResult/InputItemResult';
import Dash from "react-native-dash";

const styles = StyleSheet.create({
    containerInner: {
        paddingTop: 15,
        paddingRight: 35,
        paddingLeft: 35,
    },

    title: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#014F80'
    },

    textContainer: {
        marginBottom: 40,
    },

    text: {
        fontSize: 14,
        lineHeight: 24,
        color: '#014F80'
    },

    textBold: {
        fontWeight: 'bold',
        color: '#014F80'
    },

    markerWrapper: {
      flexDirection: 'row'
    },

    wbc: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        width: 52,
        padding: 2,
        borderRadius: 11,
        backgroundColor: '#FF9500',
        color: '#ffffff'
    },

    hct: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 52,
        padding: 2,
        borderRadius: 11,
        backgroundColor: '#3B84BE',
        color: '#ffffff'
    },

    markerText: {
        color: '#ffffff'
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 123,
        marginTop: 10,
        backgroundColor: '#3B84BE',
        color: '#ffffff'
    },

    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#ffffff'
    }
});

export default function ScreenResult() {
    const analyzes = [
        ['HGW', 'гемоглобин'],
        ['RBC', 'эритроциты'],
        ['WBC', 'лейкоциты'],
        ['HCT', 'гематокрит'],
        ['PLT', 'тромбоциты'],

    ];

    const list1 = [
        'Увеличение (лейкоцитоз) бывает при:',
        'острых воспалительных процессах; гнойных процессах, сепсисе;',
        'многих инфекционных заболеваниях вирусной, бактериальной, грибковой и другой этиологии;',
        'злокачественных новообразованиях;',
        'инфаркте миокарда;'
    ];

    const list2 = [
        'кровопотере;',
        'анемии;',
        'гидремия(внутривенное введение большого количества жидкости);',
        'при оттоке тканевой жидкости в кровеносное русло при уменьшении отеков(терапия мочегонными препаратами);',
        'снижении интенсивности образования эритроцитов в костном мозге;',
        'ускоренном разрушении эритроцитов.'
    ];

    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={styles.containerInner}>
                    {analyzes.map((el, index) => <InputItemResult key={index} short={el[0]} long={el[1]}/>)}
                </View>
                <Dash style={{width: '100%', height: 1, opacity: 0.5}} dashColor={'#014F80'}/>
                <View style={styles.containerInner}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Пояснения:
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.textBold}>Лейкоциты</Text>
                            <Text> WBC— клетки крови, Основной функцией лейкоцитов является защита организма от чужих для
                                него антигенов (в том числе, микроорганизмов, опухолевых клеток; эффект проявляется и в
                                направлении клеток трансплантата).</Text>
                        </Text>
                    </View>

                    <View style={styles.textContainer}>
                        {list1.map(textItem => (<Text style={styles.text}>&ndash;{textItem}</Text>))}
                        <View style={styles.markerWrapper}>
                            <View style={styles.wbc}>
                                <Text style={styles.markerText}>
                                    WBC
                                </Text>
                            </View>
                            <View style={styles.hct}>
                                <Text style={styles.markerText}>
                                    HCT
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.text}>
                            – после больших физических нагрузок.
                        </Text>
                    </View>
                </View>

                <Dash style={{width: '100%', height: 1, opacity: 0.5, marginBottom: 20,}} dashColor={'#014F80'}/>

                <View style={styles.containerInner}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Эритроциты RBC клетки, которые участвуют в транспорте кислорода
                            в ткани и поддерживают в организме процессы биологического окисления.
                        </Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Уменьшение содержания эритроцитов
                            в крови наблюдается при:

                        </Text>
                        {list2.map(textItem => (<Text style={styles.text}>&ndash;{textItem}</Text>))}
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        начать заново
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
