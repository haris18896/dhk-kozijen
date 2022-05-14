import { combineReducers } from 'redux'
import { testReducer } from './test'

const rootReducers = combineReducers({
  test: testReducer
})

export default rootReducers 
