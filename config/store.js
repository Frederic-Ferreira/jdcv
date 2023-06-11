import { create } from "zustand"

export const userStore = create((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: null })),
}))

export const locationStore = create((set) => ({
  userCategory: null,
  location: null,
  userPeople: 0,
  userRooms: 0,
  userEquipments: [],
  userImages: [],
  userTitle: "",
  userDescription: "",
  userPrice: 100,
  userDates: [],
  userChoice: null,
  page: 1,
  setUserCategory: (category) => set(() => ({ category })),
  setLocation: (location) => set(() => ({ location })),
  setUserPeople: (people) => set(() => ({ people })),
  setUserRooms: (rooms) => set(() => ({ rooms })),
  setUserEquipments: (equipments) => set(() => ({ equipments })),
  setUserImages: (images) => set(() => ({ images })),
  setUserTitle: (title) => set(() => ({ title })),
  setUserDescription: (description) => set(() => ({ description })),
  setUserPrice: (price) => set(() => ({ price })),
  setUserDates: (dates) => set(() => ({ dates })),
  setUserChoice: (choice) => set(() => ({ choice })),
  setPage: (page) => set(() => ({ page })),
}))
