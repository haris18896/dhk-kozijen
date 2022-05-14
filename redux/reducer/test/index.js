import { TEST_FAILURE, TEST_INIT, TEST_SUCCESS } from '../../action/actionTypes/test'

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
