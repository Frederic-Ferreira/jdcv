import HousingService from "@app/services/Housing"
import { useQuery } from "react-query"

export const useHousingList = (token, page = 1) => {
  return useQuery(
    ["housingList", page, token],
    async () => {
      const response = await HousingService.getHousingList(page, token)
      const data = await response.json()
      return data
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

export const useHousing = (token, id) => {
  return useQuery(
    ["housing", id, token],
    async () => {
      const response = await HousingService.getHousing(id, token)
      const data = await response.json()
      return data
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}
