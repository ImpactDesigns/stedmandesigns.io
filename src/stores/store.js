import { create } from "zustand";
import projectsList from "../assets/projectsList";

// console.log(34343, projectsList)

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
  listOfProjects: [...projectsList],
}));

export default useAppStore;
