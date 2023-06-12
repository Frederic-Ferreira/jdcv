import HousingService from "@app/services/Housing"

function useYoutubeVideos(token, page = 1) {
  return useQuery(
    ["housingList", page],
    async () => {
      const { data, total } = await HousingService.getHousings({
        page,
        token,
      })
      return { data, total }
    },
    { refetchOnWindowFocus: false, cacheTime: 100000, retry: true }
  )
}

export default {
  useYoutubeVideos,
}
