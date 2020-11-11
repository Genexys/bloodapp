// Скорость оседания эритроцитов СОЭ
import store from '../redux/store'
import { getReferenceRange, compareValues, exceptionMessage } from '.'

const referenceValuesESR = {
  baby: {
    // key - age in days
    30: { min: 0, max: 2.8 },
    180: { min: 2, max: 5 },
    365: { min: 3, max: 10 },
  },
  female: {
    // key - age in years
    14: { min: 5, max: 12 },
    50: { min: 2, max: 15 },
    120: { min: 2, max: 30 },
  },
  male: {
    // key - age in years
    14: { min: 5, max: 12 },
    50: { min: 2, max: 15 },
    120: { min: 2, max: 20 },
  },
}

const message = {
  lowValue: exceptionMessage,
  normal: 'Показатели в норме',
  highValue: 'Повышение скорости оседания эритроцитов может быть в следствии воспаления, инфекционных заболеваний',
}

export const getESRResult = (value, { ageInYears, ageInDays }) => {
  const gender = ageInDays <= 365 ? 'baby' : store.getState().user.gender
  const age = ageInDays <= 365 ? ageInDays : ageInYears
  const referencesByGender = referenceValuesESR[gender]

  const range = getReferenceRange(age, referencesByGender)
  const status = compareValues(range, value)

  return {
    name: 'СОЭ',
    range,
    currentValue: value,
    status,
    message: message[status],
  }
}
