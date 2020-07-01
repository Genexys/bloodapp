import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Platform, Picker} from 'react-native';
import MainScreen from './screens/MainScreen';
import Terms from './screens/Terms';
import SettingsScreen from './screens/SettingsScreen';
import Header from './components/HeaderTerms/Header';
import HeaderMain from './components/HeaderMain/HeaderMain';
import ScreenCalculate from './screens/ScreenCalculate';
import ScreenResult from "./screens/ScreenResult";

import * as SplahScreen from "expo-splash-screen";
import {createStackNavigator, TransitionPresets, CardStyleInterpolators} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {Asset} from 'expo-asset';
import {AppLoading} from 'expo';



const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 300,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const StackMenu = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Главная" component={MainScreen}/>
            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <Header navigation={navigation} {...props}/>
                ),
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            })} name="Пользовательское соглашение" component={Terms}/>

            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <HeaderMain navigation={navigation} {...props}/>
                ),
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            })} name="Форма расчета" component={ScreenCalculate}/>


            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <HeaderMain navigation={navigation} {...props}/>
                ),
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            })} name="Результат" component={ScreenResult}/>

            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <Header navigation={navigation} {...props}/>
                ),
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            })} name="Настройки" component={SettingsScreen}/>
        </Stack.Navigator>
    )
}

export default function App() {
    useEffect(() => {
        SplahScreen.preventAutoHideAsync();
    })

    const [isReady, setReady] = useState(false);

    const _cacheResourcesAsync = async () => {
        const images = [require('./assets/splash.png')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }

    if (isReady) {
        return (
            <Fragment>
                {/*{Platform.OS === 'ios' && <StatusBar style="dark"/>}*/}

                <NavigationContainer>
                    <StatusBar hidden/>
                    <StackMenu/>
                </NavigationContainer>

            </Fragment>
        );
    } else {
        return (
            <AppLoading
                startAsync={_cacheResourcesAsync}
                onFinish={() => setReady(true)}
                onError={console.warn}
            />
        )
    }
}
