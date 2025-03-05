import {create} from "zustand/react";
import {useProjectFilterStoreType} from "../types/storeTypes.ts";

const useProjectFilterStore = create<useProjectFilterStoreType>((set) => ({
  filterType: "all",
  actions: {
    setFilterType: (filterType) => set({ filterType }),
  }
}))

export const useFilterType = () => useProjectFilterStore((state) => state.filterType);
export const useSetFilterType = () => useProjectFilterStore((state) => state.actions.setFilterType);