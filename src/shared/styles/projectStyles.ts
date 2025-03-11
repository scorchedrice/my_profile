const buttonBaseStyle = "w-full py-2 px-4 rounded-lg transition-all duration-200 text-left";

export const filterStyles = {
  filter : "w-full lg:w-64 bg-white rounded-lg shadow-md p-4 h-fit",
  selectedButton : `${buttonBaseStyle} bg-blue-600 text-white shadow-md font-medium`,
  noneSelectedButton : `${buttonBaseStyle} hover:bg-gray-100`
}

export const projectStyles = {
  section: "bg-blue-400 flex flex-col items-center",
  title: "text-[50px] font-bold text-gray-700",
  content: "container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8",
  listSection: "flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center",
  projectCard: "bg-white w-full max-w-[400px] rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow h-[400px]",
  projectMainImage: "h-[200px] w-full rounded-t-lg overflow-hidden",
  README : "flex items-center gap-1 px-2 text-sm border border-gray-700 rounded-[4px] hover:bg-gray-100 transition-colors",
}