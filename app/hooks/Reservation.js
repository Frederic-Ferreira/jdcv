import ReservationService from "@app/services/Reservation"
import { useQuery } from "react-query"

const useCreateReservation = (token, params) => {
  return useQuery(
    ["createReservation", token, params],
    async () => {
      if (token && params.start_date && params.end_date) {
        const response = await ReservationService.createReservation(
          token,
          params
        )
        return response.data
      }
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

export default { useCreateReservation }
