import { create } from "zustand"

const useAppStore = create((set) => ({
  isFlyoutOpen: false,
  setIsFlyoutOpen: () =>
    set((state) => ({ isFlyoutOpen: !state.isFlyoutOpen })),
  featuredProjectType: "dev",
  setFeaturedProjectType: (stuffToAdd) =>
    set({ featuredProjectType: stuffToAdd }),
  isContactFormLoading: false,
  setIsContactFormLoading: () =>
    set((state) => ({ isContactFormLoading: !state.isContactFormLoading })),
  contactFormEmailInput: "",
  setContactFormEmailInput: (stuffToAdd) =>
    set({ contactFormEmailInput: stuffToAdd }),
  contactFormNameInput: "",
  setContactFormNameInput: (stuffToAdd) =>
    set({ contactFormNameInput: stuffToAdd }),
  contactFormMessageInput: "",
  setContactFormMessageInput: (stuffToAdd) =>
    set({ contactFormMessageInput: stuffToAdd }),
  isSnackbarOpen: false,
  setIsSnackbarOpen: () =>
    set((state) => ({ isSnackbarOpen: !state.isSnackbarOpen })),
}))

export default useAppStore
