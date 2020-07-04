import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Chevron} from 'react-native-shapes';
import {Ionicons} from '@expo/vector-icons';
import {Picker} from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from "react-native-material-dropdown";


export default function DropdownEl({color}) {
    const [gender, setGender] = useState({
        ddlSelectedValue:1
    });

    let myFavouriteActors = [{
        label: 'Tommy Wiseau',
        value: 1
    }, {
        label: 'Arnold Schwarzenneger',
        value: 2
    }, {
        label: 'Donald Glover',
        value: 3
    },
        {
            label: 'Emma Stone',
            value: 4
        }
    ]

    const style = StyleSheet.create({

        container: {
            alignSelf: 'stretch',
            height: 60,
            marginBottom: 30,
            padding: 0,
            borderBottomWidth: 1,
            borderBottomColor: (color !== 'setting') ? '#ffffff' : '#014F80',
        },

        pickerContainer: {
            alignSelf: 'stretch',
            height: 30,
            padding: 0,
            fontSize: 15,
            color: (color !== 'setting') ? '#ffffff' : '#014F80',
        },

        pickerItem: {
            padding: 0,
            fontSize: 15,
        },

        textColor: {
            color: (color !== 'setting') ? '#ffffff' : '#014F80',
        }
    });

    console.log(gender)

    const placeholder = {
        label: 'Select a sport...',
        value: null,
        color: '#9EA0A4',
    };

    const sports = [
        {
            label: 'Football',
            value: 'football',
        },
        {
            label: 'Baseball',
            value: 'baseball',
        },
        {
            label: 'Hockey',
            value: 'hockey',
        },
    ];

    return (
        <View style={style.container}>
            {/*<Picker*/}
            {/*    selectedValue={gender}*/}
            {/*    style={style.pickerContainer}*/}
            {/*    placeholder={{}}*/}
            {/*    onValueChange={(itemValue, itemIndex) =>*/}
            {/*        setGender(itemValue)*/}
            {/*    }*/}
            {/*    itemStyle={{*/}
            {/*        height: 50,*/}
            {/*        padding: 0,*/}
            {/*        backgroundColor: 'transparent',*/}
            {/*        color: '#ffffff',*/}
            {/*    }}*/}

            {/*    itemTextStyle={{*/}
            {/*        padding: 0,*/}
            {/*        color: '#ffffff',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Picker.Item label="Мужчина" value="Мужчина" />*/}
            {/*    <Picker.Item label="Женщина" value="Женщина" />*/}
            {/*    <Picker.Item label="Женщина в положении" value="Женщина в положении" />*/}
            {/*    <Picker.Item label="Рёбенок" value="Рёбенок" />*/}
            {/*    <Picker.Item label="Новорожденный" value="Новорожденный" />*/}
            {/*</Picker>*/}

            {/*<RNPickerSelect*/}
            {/*    placeholder={placeholder}*/}
            {/*    items={sports}*/}
            {/*    onValueChange={value => {*/}
            {/*        setGender({*/}
            {/*            favSport3: value,*/}
            {/*        })*/}
            {/*    }}*/}
            {/*    style={{*/}
            {/*        inputAndroid: {*/}
            {/*            backgroundColor: 'transparent',*/}
            {/*        },*/}
            {/*        iconContainer: {*/}
            {/*            top: 5,*/}
            {/*            right: 15,*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    value={gender.favSport3}*/}
            {/*    useNativeAndroidPickerStyle={true}*/}
            {/*    textInputProps={{underlineColorAndroid: 'cyan'}}*/}
            {/*    Icon={() => {*/}
            {/*        return <Chevron size={1.5} color="gray"/>;*/}
            {/*    }}*/}
            {/*/>*/}

            <Dropdown data={myFavouriteActors} value={gender.ddlSelectedValue} itemColor={'#3B84BE'} baseColor={(color !== 'setting') ? '#ffffff' : '#014F80'} selectedItemColor={'#000000'} textColor={(color !== 'setting') ? '#ffffff' : '#014F80'} itemPadding={5} inputContainerStyle={{ borderBottomColor: 'transparent', paddingVertical: 0, margin: 0 }} containerStyle = {{padding: 0, margin: 0}} labelPadding={0} useNativeDriver={true} onChangeText={(value,index,data)=>setGender({ddlSelectedValue: value})} />

        </View>
    );
}
