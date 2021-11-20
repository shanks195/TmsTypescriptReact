const LocationPaths = {

  countries: {
    getList: 'config/location/countries/'
  },

  provinces: {
    getList: 'config/location/:country/provinces/'
  },

  districts: {
    getList: 'config/location/:province/districts/'
  },

  wards: {
    getList: 'config/location/:district/wards/'
  }

}

export default LocationPaths;