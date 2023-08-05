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

HousingService.getHousing = function (params) {
  return axios.get(`/housing/${params.id}`, {
    params,
    headers: { Authorization: params.token },
  })
}

export default HousingService
