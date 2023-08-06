import HousingService from "@app/services/Housing"
import { useQuery } from "react-query"

const useHousingList = (token, page, queryParams) => {
  return useQuery(
    ["housingList", token, page, queryParams],
    async () => {
      if (token) {
        const response = await HousingService.getHousingList(token, {
          page,
          ...queryParams,
        })
        return response.data
      }
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

const useHousing = (id) => {
  return useQuery(
    ["housing", id],
    async () => {
      const response = await HousingService.getHousing(id)
      return response.data
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

export default { useHousingList, useHousing }
