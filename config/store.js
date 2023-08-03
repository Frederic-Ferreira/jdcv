import create from "zustand"
import { persist } from "zustand/middleware"

export const userStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set(() => ({ user })),
      setToken: (token) => set(() => ({ token })),
      clearUser: () => set(() => ({ user: null })),
      reset: () => set(() => ({ user: null, token: null })),
    }),
    {
      name: "user-store",
      getStorage: () => localStorage,
    }
  )
)

export const locationStore = create((set) => ({
  userStyle: null,
  location: null,
  userPeople: 0,
  userRooms: 0,
  userEvents: "",
  userMainImage: {},
  userImages: [],
  userTitle: "",
  userDescription: "",
  userPrice: 100,
  userDates: [],
  userChoice: null,
  page: 1,
  setUserStyle: (userStyle) => set(() => ({ userStyle })),
  setLocation: (location) => set(() => ({ location })),
  setUserPeople: (userPeople) => set(() => ({ userPeople })),
  setUserRooms: (userRooms) => set(() => ({ userRooms })),
  setUserEvents: (userEvents) => set(() => ({ userEvents })),
  setUserMainImage: (userMainImage) => set(() => ({ userMainImage })),
  setUserImages: (userImages) => set(() => ({ userImages })),
  setUserTitle: (userTitle) => set(() => ({ userTitle })),
  setUserDescription: (userDescription) => set(() => ({ userDescription })),
  setUserPrice: (userPrice) => set(() => ({ userPrice })),
  setUserDates: (userDates) => set(() => ({ userDates })),
  setUserChoice: (userChoice) => set(() => ({ userChoice })),
  setPage: (page) => set(() => ({ page })),
  reset: () =>
    set(() => ({
      userStyle: null,
      location: null,
      userPeople: 0,
      userRooms: 0,
      userEvents: "",
      userImages: [],
      userTitle: "",
      userDescription: "",
      userPrice: 100,
      userDates: [],
      userChoice: null,
      page: 1,
    })),
}))
