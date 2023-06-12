const HousingService = {}

HousingService.getHousings = function (page, token) {
  if (token) {
    return fetch("http://127.0.0.1:8000/api/logement/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // Ajoutez ici le corps de la requête si nécessaire
    })
  }
}

export default HousingService
