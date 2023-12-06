const getFirstName = require("../utilities/utils/index");
const peopleName = require("./country/state/city/index");

const getPeopleInCity = (peopleName) => {
  return getFirstName(peopleName);
};
module.exports = getPeopleInCity;
