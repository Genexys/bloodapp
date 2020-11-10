// Гемоглобин

import store from '../redux/store'
import { getReferenceRange, compareValues } from '.'

const referenceValuesHGB = {
  baby: {
    // key - age in days
    1: { min: 18, max: 24 },
    5: { min: 16, max: 20 },
    10: { min: 16, max: 19 },
    30: { min: 15, max: 18 },
    60: { min: 9.4, max: 13 },
    120: { min: 10.3, max: 14.1 },
    180: { min: 11.1, max: 14.1 },
    240: { min: 11.4, max: 14 },
    365: { min: 11.3, max: 14.5 },
  },
  female: {
    // key - age in years
    5: { min: 11, max: 14 },
    10: { min: 11.5, max: 14.5 },
    12: { min: 12, max: 15 },
    15: { min: 11.5, max: 15 },
    18: { min: 11.7, max: 15.3 },
    45: { min: 11.7, max: 15.5 },
    65: { min: 11.7, max: 16 },
    120: { min: 11.7, max: 16.1 },
  },
  male: {
    // key - age in years
    5: { min: 11, max: 14 },
    10: { min: 11.5, max: 14.5 },
    12: { min: 12, max: 15 },
    15: { min: 12, max: 16 },
    18: { min: 11.7, max: 16.6 },
    45: { min: 13.2, max: 17.3 },
    65: { min: 13.1, max: 17.2 },
    120: { min: 12.6, max: 17.4 },
  },
}

const message = {
  lowValue:
    'Пониженное содержание гемоглобина может быть признаком разнообразных анемий обусловленых: кровопотерей, нарушением продукции эритроцитов, разрушением эритроцитов, длительных или сложных болезней.',
  normal: 'Показатели в норме',
  highValue: 'Повышенное содержание гемоглобина может быть признаком: обезвозживания, гипоксии',
}

export const getHGBResult = (value, { ageInYears, ageInDays }) => {
  const gender = ageInDays < 365 ? 'baby' : store.getState().user.gender
  const age = ageInDays < 365 ? ageInDays : ageInYears
  const referencesByGender = referenceValuesHGB[gender]

  const range = getReferenceRange(age, referencesByGender)
  const status = compareValues(range, value)

  return {
    range,
    currentValue: value,
    status,
    message: message[status],
  }
}
