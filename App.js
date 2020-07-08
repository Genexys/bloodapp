import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplahScreen from "expo-splash-screen";
import {createStackNavigator, TransitionPresets, CardStyleInterpolators} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {Asset} from 'expo-asset';
import {AppLoading} from 'expo';

import MainScreen from './screens/MainScreen';
import Terms from './screens/Terms';
import SettingsScreen from './screens/SettingsScreen';
import HeaderTerms from './components/HeaderTerms/HeaderTerms';
import HeaderMain from './components/HeaderMain/HeaderMain';
import ScreenCalculate from './screens/ScreenCalculate';
import ScreenResult from "./screens/ScreenResult";
import ButtonBack from "./components/ButtonBack/ButtonBack";
import MainLogoHeader from "./Icon/MainLogoHeader";
import HeaderResult from "./components/HeaderResult/HeaderMain";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const StackMenu = () => {
    return (
        <Stack.Navigator initialRouteName="Главная" headerMode="screen">
            <Stack.Screen options={{headerShown: false}} name="Главная" component={MainScreen}/>

            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <HeaderTerms {...props}/>
                ),
                cardStyle: {
                    backgroundColor: '#ffffff'
                },
            })} name="Пользовательское соглашение" component={Terms}/>

            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <HeaderMain {...props}/>
                ),
                cardStyle: {
                    backgroundColor: '#ffffff'
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureEnabled: false
            })} name="Форма расчета" component={ScreenCalculate}/>


            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <HeaderResult {...props}/>
                ),
                cardStyle: {
                    backgroundColor: '#ffffff'
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            })} name="Результат" component={ScreenResult}/>

            <Stack.Screen options={({navigation}) => ({
                header: (props) => (
                    <HeaderTerms {...props}/>
                ),
                cardStyle: {
                    backgroundColor: '#ffffff'
                },
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
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SafeAreaProvider>
                        {/*{Platform.OS === 'ios' && <StatusBar style="dark"/>}*/}

                        <NavigationContainer>
                            <StatusBar hidden/>
                            <StackMenu/>
                        </NavigationContainer>

                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
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
