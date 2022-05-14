import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import { testReducer } from './reducer/test'

const combinedReducer = combineReducers({
  test: testReducer
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(applyMiddleware()))
}

export const wrapper = createWrapper(initStore)
