import * as APIUtil from '../utils/trip_util';

export const RECEIVE_TRIP  = "RECEIVE_TRIP";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const REMOVE_TRIP = "REMOVE_TRIP";

export const receiveTrip = trip => {
  return {type: RECEIVE_TRIP, trip}
};

export const receiveTrips = trips => {
  return {type: RECEIVE_TRIPS, trips}
};

export const removeTrip = trip => {
  return {type: REMOVE_TRIP, trip}
}

export const retrieveMyTrips = userId => dispatch => {
  return APIUtil.fetchMyTrips(userId)
    .then(res => dispatch(receiveTrips(res)));
};

export const createTrip = (userId, trip) => dispatch => {
  return APIUtil.createTrip(userId, trip)
    .then(res => dispatch(receiveTrip(res)));
};

export const deleteTrip = (trip) => dispatch => {
  return APIUtil.deleteTrip(trip)
    .then(() => dispatch(removeTrip(trip)));
};