// [{...tripDetails, ...creatorDetails}]
export const allTripsSelector = state => {
  const result = []
  Object.values(state.entities.trips).forEach(trip => {
    let thisTrip = trip
    thisTrip.creator = state.entities.users[trip.creatorId]
    result.push(thisTrip)
  })
  return result
}

export const selectTripById = (state, id) => {
  const trip = state.entities.trips[id]
  if (trip === undefined) return {}
  trip.creator = state.entities.users[trip.creatorId]
  return trip
}

export const selectAllOtherUsers = (state) => {
  const currentUserId = state.session.id
  const users = []
  Object.values(state.entities.users).forEach(user => {
    if (user.id !== currentUserId) {
      users.push(user)
    }
  })
  return users
}