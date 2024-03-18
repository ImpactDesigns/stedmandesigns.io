import { create } from "zustand";

const useAppStore = create((set) => ({
  isFlyoutOpen: false,
  setIsFlyoutOpen: () =>
    set((state) => ({ isFlyoutOpen: !state.isFlyoutOpen })),
  isBannerVisible: true,
  setIsBannerVisible: () =>
    set((state) => ({ isBannerVisible: !state.isBannerVisible })),
  featuredProjectType: "dev",
  setFeaturedProjectType: (stuffToAdd) =>
    set({ featuredProjectType: stuffToAdd }),
}));

export default useAppStore;
