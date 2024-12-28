type Props = {
  name: string,
  content: string[],
}

export function EducationBlock({ name, content }: Props) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 m-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{name}</h2>
          <ul className="space-y-2">
            {content.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}