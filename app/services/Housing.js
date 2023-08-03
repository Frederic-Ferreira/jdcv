import axios from "@config/axios"
const HousingService = {}

HousingService.getHousingList = function (params) {
  return axios.get("/housing", { headers: { Authorization: params.token } })
}

HousingService.getHousing = function (params) {
  return axios.get(`/housing/${params.id}`, {
    params,
    headers: { Authorization: params.token },
  })
}

export default HousingService
