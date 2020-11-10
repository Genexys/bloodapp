import React from 'react'
import { Text, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    backgroundColor: '#ffffff',
  },

  buttonPrev: {
    paddingTop: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonPrevText: {
    marginLeft: 15,
    fontSize: 17,
    color: '#3B84BE',
  },

  title: {
    marginBottom: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014F80',
  },

  text: {
    marginBottom: 20,
    fontSize: 14,
    color: '#014F80',
  },
})

export default function Terms({ navigation }) {
  const [loaded] = useFonts({
    Georgia: require('../assets/fonts/Georgia.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={[style.title, { fontFamily: 'Georgia' }]}>Пользовательское соглашение</Text>

        <Text style={style.text}>
          Настоящий документ «Пользовательское соглашение» представляет собой предложение ООО «_____» (далее —
          «Администрация»), заключить договор на изложенных ниже условиях Соглашения.
        </Text>

        <Text style={style.text}>1. Общие положения Пользовательского соглашения</Text>

        <Text style={style.text}>
          1.1. В настоящем документе и вытекающих или связанным с ним отношениях Сторон применяются следующие термины и
          определения:
        </Text>

        <Text style={style.text}>
          а) Платформа — программно-аппаратные средства, интегрированные с Сайтом Администрации;
        </Text>

        <Text style={style.text}>
          б) Пользователь — дееспособное физическое лицо, присоединившееся к настоящему Соглашению в собственном
          интересе либо выступающее от имени и в интересах представляемого им юридического лица.
        </Text>

        <Text style={style.text}>
          в) Сайт Администрации/ Сайт — интернет-сайты, размещенные в домене ________.ru и его поддоменах.
        </Text>

        <Text style={style.text}>
          г) Сервис — комплекс услуг и лицензия, предоставляемые Пользователю с использованием Платформы.
        </Text>

        <Text style={style.text}>д) Соглашение — настоящее соглашение со всеми дополнениями и изменениями.</Text>

        <Text style={style.text}>
          1.2. Использование вами Сервиса любым способом и в любой форме в пределах его объявленных функциональных
          возможностей, включая:
        </Text>

        <Text style={style.text}>
          просмотр размещенных на Сайте материалов; регистрация и/или авторизация на Сайте, размещение или отображение
          на Сайте любых материалов, включая но не ограничиваясь такими как: тексты, гипертекстовые ссылки, изображения,
          аудио и видео- файлы, сведения и/или иная информация, создает договор на условиях настоящего Соглашения в
          соответствии с положениями ст.437 и 438 Гражданского кодекса Российской Федерации.
        </Text>

        <Text style={style.text}>
          1.3. Воспользовавшись любой из указанных выше возможностей по использованию Сервиса вы подтверждаете, что:
        </Text>

        <Text style={style.text}>
          а) Ознакомились с условиями настоящего Соглашения в полном объеме до начала использования Сервиса.
        </Text>

        <Text style={style.text}>
          б) Принимаете все условия настоящего Соглашения в полном объеме без каких-либо изъятий и ограничений с вашей
          стороны и обязуетесь их соблюдать или прекратить использование Сервиса. Если вы не согласны с условиями
          настоящего
        </Text>
      </View>
    </ScrollView>
  )
}
