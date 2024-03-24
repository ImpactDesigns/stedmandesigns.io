import { create } from "zustand"

const useAppStore = create((set) => ({
  isFlyoutOpen: false,
  setIsFlyoutOpen: () =>
    set((state) => ({ isFlyoutOpen: !state.isFlyoutOpen })),
  isBannerVisible: true,
  setIsBannerVisible: () =>
    set((state) => ({ isBannerVisible: !state.isBannerVisible })),
  isModalOpen: false,
  setIsModalOpen: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  featuredProjectType: "dev",
  setFeaturedProjectType: (stuffToAdd) =>
    set({ featuredProjectType: stuffToAdd }),
  contactFormEmailInput: "",
  setContactFormEmailInput: (stuffToAdd) =>
    set({ contactFormEmailInput: stuffToAdd }),
  contactFormNameInput: "",
  setContactFormNameInput: (stuffToAdd) =>
    set({ contactFormNameInput: stuffToAdd }),
  contactFormMessageInput: "",
  setContactFormMessageInput: (stuffToAdd) =>
    set({ contactFormMessageInput: stuffToAdd }),
}))

export default useAppStore
