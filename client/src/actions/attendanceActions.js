import * as AttendanceUtils from "../utils/attendanceUtils"
import { removeAttendRequest } from "./attendRequestActions"
import { receiveUser, receiveUsers } from "./userActions"
import {
  decrementSpacesLeft,
  incrementSpacesLeft,
  receiveTripCounts
} from "./counts/tripCountActions";

export const RECEIVE_ATTENDANCE = "RECEIVE_ATTENDANCE"
export const RECEIVE_ATTENDANCES = "RECEIVE_ATTENDANCES"
export const REMOVE_ATTENDANCE = "REMOVE_ATTENDANCE"
export const CLEAR_ATTENDANCES = "CLEAR_ATTENDANCES"

export const receiveAttendance = attendance => {
  return {
    type: RECEIVE_ATTENDANCE,
    attendance
  }
}

export const receiveAttendances = attendances => {
  return {
    type: RECEIVE_ATTENDANCES,
    attendances
  }
}

export const removeAttendance = id => {
  return {
    type: REMOVE_ATTENDANCE,
    id
  }
}

export const clearAttendances = () => {
  return {
    type: CLEAR_ATTENDANCES
  }
}

export const acceptAttendance = attendRequestId => dispatch => {
  return AttendanceUtils.acceptAttendance(attendRequestId)
    .then(res => {
      dispatch(receiveAttendance(res.data.attendance))
      dispatch(receiveUser(res.data.user))
      dispatch(decrementSpacesLeft(Object.values(res.data.attendance)[0].tripId))
      dispatch(removeAttendRequest(attendRequestId))
    })
    .catch(err => console.log(err.response.data))
}

export const getAttendances = tripId => dispatch => {
  return AttendanceUtils.getAttendances(tripId)
    .then(res => {
      dispatch(receiveAttendances(res.data.attendances))
      dispatch(receiveUsers(res.data.users))
      dispatch(receiveTripCounts(res.data.tripCounts))
    })
    .catch(err => console.log(err.response.data))
}

export const deleteAttendance = id => dispatch => {
  return AttendanceUtils.deleteAttendance(id)
    .then(res => {
      dispatch(removeAttendance(id))
      dispatch(incrementSpacesLeft(res.data.trip_id))
    })
    .catch(err => console.log(err.response.data))
}
