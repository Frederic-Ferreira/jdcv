import HousingService from "@app/services/Housing"
import { useQuery } from "react-query"

const useHousingList = (params) => {
  return useQuery(
    ["housingList", params],
    async () => {
      if (params.token) {
        const response = await HousingService.getHousingList(params)
        return response.data
      }
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

const useHousing = (params) => {
  return useQuery(
    ["housing", params],
    async () => {
      if (params.token) {
        const response = await HousingService.getHousing(params)
        return response.data
      }
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

export default { useHousingList, useHousing }
