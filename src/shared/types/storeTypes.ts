export interface useModalStoreType {
  isOpen: boolean;
  selectedProjectId: number;
  actions: {
    setIsOpen: (isOpen: boolean) => void;
    setSelectedProjectId: (selectedProjectId: number) => void;
  }
}

export interface useProjectFilterStoreType {
  filterType: "all" | "team" | "personal" ;
  actions: {
    setFilterType: (filterType: "all" | "team" | "personal") => void;
  }
};