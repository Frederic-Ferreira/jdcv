const HousingService = {}

HousingService.getHousingList = function (params) {
  return fetch("http://127.0.0.1:8000/api/public/logement/search", {
    method: "POST",
    body: JSON.stringify(params),
  })
}

HousingService.getHousing = function (id) {
  return fetch(`http://127.0.0.1:8000/api/public/logement/${id}`)
}

export default HousingService
