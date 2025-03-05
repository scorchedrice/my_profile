export type useModalStoreType = {
  isOpen: boolean;
  selectedProjectId: number;
  actions: {
    setIsOpen: (isOpen: boolean) => void;
    setSelectedProjectId: (selectedProjectId: number) => void;
  }
}



export type useProjectFilterStoreType = {
  filterType: "all" | "team" | "personal" ;
  actions: {
    setFilterType: (filterType: "all" | "team" | "personal") => void;
  }
};