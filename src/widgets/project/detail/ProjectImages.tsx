import {ProjectDetailType} from "../../../shared/types/globalTypes.ts";

type DescriptionProps = Pick<ProjectDetailType, 'images'>

export default function ProjectImages({ images } : DescriptionProps) {
    return (
      <div className="w-[80%]">
        <h2 className="text-[30px] font-bold">💻결과물 사진</h2>
        <div className="m-5">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="max-w-full max-h-[300px] object-contain"
                />
                <p className="text-gray-700">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}