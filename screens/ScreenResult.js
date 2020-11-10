import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setUser as setUserAction } from '../redux/user/actions'
import InputItemResult from '../components/InputItemResult/InputItemResult'
import Dash from 'react-native-dash'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

function ScreenResult({ navigation, route, user }) {
  const results = Object.entries(route.params.results)

  const [loaded] = useFonts({
    Georgia: require('../assets/fonts/Georgia.ttf'),
  })

  const userType = user.gender === 'male' ? 'Мужчина' : 'Женщина'

  const isEverythingNormal = Object.values(route.params.results).findIndex(({ status }) => status !== 'normal') === -1

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.containerInner}>
          <Text style={[styles.titleScreen, { fontFamily: 'Georgia' }]}>Отклонения</Text>
          <Text style={styles.text}>
            Пациент: {userType}, дата рождения: {user.birthDay.string}
          </Text>
        </View>

        <View style={styles.containerInner}>
          {results.map(([label, result]) => {
            if (result.status === 'normal') {
              return null
            }
            return (
              <InputItemResult
                key={label}
                short={label}
                long={result.name}
                status={result.status}
                num={result.currentValue}
              />
            )
          })}
        </View>
        <Dash style={{ width: '100%', height: 1, opacity: 0.5, marginBottom: 20 }} dashColor={'#014F80'} />
        {isEverythingNormal ? (
          <View style={[styles.containerInner, { flexGrow: 1 }]}>
            <Text style={[styles.title, { fontFamily: 'Georgia' }]}>Все показатели в норме</Text>
          </View>
        ) : (
          <>
            <View style={styles.containerInner}>
              <Text style={[styles.title, { fontFamily: 'Georgia' }]}>Пояснения:</Text>
            </View>
            {results.map(([label, result], index) => {
              if (result.status === 'normal') {
                return null
              }

              return (
                <>
                  <View style={styles.containerInner}>
                    <View style={styles.textContainer}>
                      <View style={styles[result.status]}>
                        <Text style={styles.markerText}>{label}</Text>
                      </View>
                      <Text style={styles.text}>
                        <Text style={styles.textBold}>{`${result.name.toUpperCase()}\n`}</Text>
                        <Text>{result.message}</Text>
                      </Text>
                    </View>
                  </View>
                  {index !== results.length - 1 && (
                    <Dash style={{ width: '100%', height: 1, opacity: 0.5, marginBottom: 20 }} dashColor={'#014F80'} />
                  )}
                </>
              )
            })}
          </>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Главная')
          }}
        >
          <Text style={styles.buttonText}>начать заново</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, {
  setUser: setUserAction,
})(ScreenResult)

const styles = StyleSheet.create({
  containerInner: {
    paddingTop: 15,
    paddingRight: 35,
    paddingLeft: 35,
  },

  titleScreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014F80',
  },

  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014F80',
  },

  textContainer: {
    marginBottom: 40,
  },

  text: {
    fontSize: 14,
    lineHeight: 24,
    color: '#014F80',
  },

  textBold: {
    fontWeight: 'bold',
    color: '#014F80',
  },

  markerWrapper: {
    flexDirection: 'row',
  },

  highValue: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    width: 52,
    padding: 2,
    borderRadius: 11,
    backgroundColor: '#FF9500',
    color: '#ffffff',
  },

  lowValue: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    padding: 2,
    borderRadius: 11,
    backgroundColor: '#3B84BE',
    color: '#ffffff',
  },

  markerText: {
    color: '#ffffff',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
    marginTop: 10,
    backgroundColor: '#3B84BE',
    color: '#ffffff',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
})
