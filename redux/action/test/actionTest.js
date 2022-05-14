import { TEST_FAILURE, TEST_INIT, TEST_SUCCESS } from '../actionTypes/test'

export const testInit = () => {
  type: TEST_INIT
}

export const setInfo = () => {
  return async dispatch => {
    dispatch(testInit())
    try {
      const user = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const userData = await user.json()
      dispatch({ type: TEST_SUCCESS, payload: userData })
    } catch (error) {
      dispatch({ type: TEST_FAILURE, payload: error })
    }
  }
}
