export const allTripsSelector = trips => {
  const result = [];
  Object.keys(trips).forEach(key => {
    result.push(trips[key]);
  });
  return result;
};