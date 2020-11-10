import { getHGBResult } from './hgb'
import { getWBCResult } from './wbc'
import { getESRResult } from './esr'

export const analyzesList = [
  { label: 'HGB', name: 'гемоглобин' },
  // { label: 'WBC', name: 'лейкоциты' },
  // { label: 'ESR', name: 'COЭ' },
  // { label: 'RBC', name: 'эритроциты' },
  // {label: 'HCT', name: 'гематокрит'},
  // {label: 'PLT', name: 'тромбоциты'},
]

const mapCalculate = {
  HGB: getHGBResult,
  WBC: getWBCResult,
  ESR: getESRResult,
}

export const getResult = (listOfValues, age) => {
  const result = {}
  for (const [key, value] of Object.entries(listOfValues)) {
    if (value !== '') {
      result[key] = mapCalculate[key](value, age)
    }
  }
  return result
}

export const getReferenceRange = (age, references) => {
  for (const [key, value] of Object.entries(references)) {
    if (age < key) {
      return value
    }
  }
}

export const compareValues = ({ min, max }, current) => {
  if (current < min) {
    return 'lowValue'
  } else if (current > max) {
    return 'highValue'
  } else {
    return 'normal'
  }
}
