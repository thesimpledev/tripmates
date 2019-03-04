import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/userActions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user
      return newState
    case RECEIVE_USERS:
      return action.users
    default:
      return oldState
  }
}

export default usersReducer