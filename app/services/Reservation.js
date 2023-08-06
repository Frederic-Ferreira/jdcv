import axios from "@config/axios"

const ReservationService = {}

ReservationService.createReservation = function (token, params) {
  const config = {
    headers: {
      Authorization: token,
    },
  }
  return axios.post(
    "/reservation",
    {
      ...params,
    },
    config
  )
}

ReservationService.getStripeSession = function (token, params, id) {
  const config = {
    headers: {
      Authorization: token,
    },
  }
  return axios.post(`/stripe/${id}`, { ...params }, config)
}

ReservationService.createPayment = function (price, id, token) {
  const config = {
    headers: {
      Authorization: token,
    },
  }
  return axios.patch(`/reservation/${id}`, { price }, config)
}

export default ReservationService
