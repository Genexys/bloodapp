// Лейкоциты

import { getReferenceRange, compareValues } from '.'

const referenceValuesWBC = {
  baby: {
    // key - age in days
    1: { min: 10, max: 30 },
    5: { min: 9, max: 15 },
    10: { min: 8.5, max: 14 },
    30: { min: 8.5, max: 14 },
    365: { min: 8, max: 12 },
  },
  another: {
    // key - age in years
    2: { min: 6, max: 17 },
    4: { min: 5.5, max: 15.5 },
    6: { min: 5, max: 14.5 },
    10: { min: 4.5, max: 13.5 },
    16: { min: 4.5, max: 13 },
    120: { min: 4, max: 10 },
  },
}

const message = {
  lowValue:
    'Понижение уровня лейкоцитов может говорить о вирусных инфекциях, встречается при некоторых бактериальных инфекциях',
  normal: 'Показатели в норме',
  highValue: 'Повышение уровня лейкоцитов может говорить о воспалении, бактериальной инфекции',
}

export const getWBCResult = (value, { ageInYears, ageInDays }) => {
  const gender = ageInDays <= 365 ? 'baby' : 'another'
  const age = ageInDays <= 365 ? ageInDays : ageInYears
  const referencesByGender = referenceValuesWBC[gender]

  const range = getReferenceRange(age, referencesByGender)
  const status = compareValues(range, value)

  return {
    name: 'лейкоциты',
    range,
    currentValue: value,
    status,
    message: message[status],
  }
}
