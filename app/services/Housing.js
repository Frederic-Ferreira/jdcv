const HousingService = {}

HousingService.getHousingList = function (page, token) {
  if (token) {
    return fetch("http://127.0.0.1:8000/api/logement/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ page: page }),
    })
  }
}

HousingService.getHousing = function (id, token) {
  console.log("function called", id, token)
  if (token && id) {
    return fetch(`http://127.0.0.1:8000/api/logement/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  }
}

export default HousingService
