import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setUser as setUserAction } from '../redux/user/actions'
import InputItemResult from '../components/InputItemResult/InputItemResult'
import Dash from 'react-native-dash'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import { FlatList } from 'react-native-gesture-handler'

function ScreenResult({ navigation, user }) {
  const results = Object.entries(user.lastResult).filter(analize => analize[1].status !== 'normal')

  const [loaded] = useFonts({
    Georgia: require('../assets/fonts/Georgia.ttf'),
  })

  const userType = user.gender === 'male' ? 'Мужчина' : 'Женщина'

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={styles.listHeaderContainer}
        ListHeaderComponent={
          <>
            <View style={styles.listHeaderContainerInner}>
              <Text style={[styles.titleScreen, { fontFamily: 'Georgia' }]}>Отклонения</Text>
              <Text style={styles.text}>
                Пациент: {userType}, дата рождения: {user.birthDay.string}
              </Text>
            </View>

            <View style={styles.listHeaderContainerValue}>
              {results.map(([label, result]) => (
                <InputItemResult
                  key={label}
                  short={label}
                  long={result.name}
                  status={result.status}
                  num={result.currentValue}
                />
              ))}
            </View>
            <Dash style={styles.dashHeader} dashColor={'#014F80'} />
          </>
        }
        data={results}
        keyExtractor={item => item[0]}
        ListEmptyComponent={
          <View style={[styles.containerInner, { flexGrow: 1 }]}>
            <Text style={[styles.title, { fontFamily: 'Georgia' }]}>Все показатели в норме</Text>
          </View>
        }
        renderItem={({ item: [label, result], index }) => (
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
            {index !== results.length - 1 && <Dash style={styles.dashComment} dashColor={'#014F80'} />}
          </>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Главная')
        }}
      >
        <Text style={styles.buttonText}>начать заново</Text>
      </TouchableOpacity>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, {
  setUser: setUserAction,
})(ScreenResult)

const styles = StyleSheet.create({
  listHeaderContainer: {
    paddingTop: 15,
  },
  listHeaderContainerInner: {
    paddingHorizontal: 35,
  },
  listHeaderContainerValue: {
    paddingTop: 15,
    paddingHorizontal: 35,
  },
  dashHeader: { width: '100%', height: 1, opacity: 0.5, marginBottom: 20, paddingTop: 15 },
  dashComment: { width: '100%', height: 1, opacity: 0.5, marginBottom: 20 },
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
