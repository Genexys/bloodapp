import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import {setUser as setUserAction} from '../../redux/user/actions';
import DropdownEl from '../DropdownEL/DropdownEL';
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

function MainForm({navigation, typeForm, setUser, user}) {
    const [gender, setGender] = useState(user.gender);
    const [age, setAge] = useState(user.age);
    const [month, setMonth] = useState(user.month);

    return (
        <View style={styles.container}>
            <DropdownEl value={gender} onChange={setGender} color={typeForm}/>

            <View style={styles.containerInput}>
                <View style={styles.containerAge}>
                    <Input type={'age'} placeholder={'Возраст'} color={typeForm} value={age}
                           onChangeText={(val) => setAge(val)}/>
                </View>
                <View style={styles.containerMonth}>
                    <Input type={'month'} placeholder={'Мес'} color={typeForm} value={month}
                           onChangeText={(val) => setMonth(val)}/>
                </View>
            </View>

            {typeForm !== 'setting' ? <View style={styles.containerBtn}>
                <ButtonMain onPress={() => {
                    setUser({
                        gender,
                        age,
                        month
                    })
                    navigation.navigate('Форма расчета');
                }} />
            </View> : null}
        </View>
    );
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, {
    setUser: setUserAction
})(MainForm)
