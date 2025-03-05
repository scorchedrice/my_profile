import {create} from "zustand/react";
import {useModalStoreType} from "../types/storeTypes.ts";

const useModalStore = create<useModalStoreType>((set) => ({
  isOpen: false,
  selectedProjectId: 1,
  actions: {
    setIsOpen: (isOpen) => set({ isOpen }),
    setSelectedProjectId: (selectedProjectId) => set({ selectedProjectId })
  }
}))

export const useIsOpen = () => useModalStore((state) => state.isOpen);
export const useSelectedProjectId = () => useModalStore((state) => state.selectedProjectId);
export const useSetIsOpen = () => useModalStore((state) => state.actions.setIsOpen);
export const useSetSelectedProjectId = () => useModalStore((state) => state.actions.setSelectedProjectId);
