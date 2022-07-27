import { TEST_FAILURE, TEST_INIT, TEST_SUCCESS,
  TEST2_INIT,
  TEST2_SUCCESS,
  TEST2_FAILURE } from '../../action/actionTypes/test'

export const testReducer = (state = { user: 'haris' }, action) => {
  switch (action.type) {
    case TEST_INIT:
      return { ...state, loading: true }
    case TEST_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case TEST_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const test2Reducer = (state = { user: 'haris' }, action) => {
  switch (action.type) {
    case TEST2_INIT:
      return { ...state, loading: true }
    case TEST2_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case TEST2_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}