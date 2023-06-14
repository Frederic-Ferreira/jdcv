import HousingService from "@app/services/Housing"
import { useQuery } from "react-query"

export const useHousingList = (params) => {
  return useQuery(
    ["housingList", params],
    async () => {
      const response = await HousingService.getHousingList(params)
      const data = await response.json()
      console.log(data)
      return data
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

export const useHousing = (id) => {
  return useQuery(
    ["housing", id],
    async () => {
      const response = await HousingService.getHousing(id)
      const data = await response.json()
      return data
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}
