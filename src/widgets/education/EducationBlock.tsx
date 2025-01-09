type Props = {
  name: string,
  content: string[],
}

export function EducationBlock({ name, content }: Props) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{name}</h2>
      <ul className="space-y-3">
        {content.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 flex items-start gap-3"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}