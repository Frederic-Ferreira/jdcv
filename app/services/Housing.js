import axios from "@config/axios"
const HousingService = {}

HousingService.getHousingList = function (token, params) {
  const config = {
    headers: {
      Authorization: token,
    },
    params,
  }
  return axios.get("/housing", config)
}

HousingService.getHousing = function (id) {
  return axios.get(`/housing/${id}`)
}

export default HousingService
