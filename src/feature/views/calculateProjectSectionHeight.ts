const CARD_HEIGHT = 400;
const GAP = 32;

export function calculateProjectSectionHeight(totalProjects: number) {
  const getColumnCount = (width: number) => {
    if (width >= 1280) return 3;  // xl breakpoint
    if (width >= 768) return 2;   // md breakpoint
    return 1;
  };

  const width = window.innerWidth;
  const columns = getColumnCount(width);
  const rows = Math.ceil(totalProjects / columns);

  return (CARD_HEIGHT + GAP) * rows - GAP;
}