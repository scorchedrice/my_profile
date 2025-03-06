import {ProjectImageProps} from "../../../shared/types/projectTypes.ts";
import Modal from "react-modal";
import {useState} from "react";
import {EnlargedImageModalStyle} from "../../../shared/styles/projectDescriptionModalStyles.ts";

export default function ProjectImages({ images } : ProjectImageProps) {
  const [selectedImage, setSelectedImage] = useState<{url: string, caption: string} | null>(null);

  return (
    <div className="w-[80%]">
      <h2 className="text-[30px] font-bold">💻 결과물 사진</h2>
      <div className="m-5">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-full h-[300px] flex items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-700 text-center">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={() => setSelectedImage(null)}
        style={EnlargedImageModalStyle}
        contentLabel="Image Modal"
      >
        <div
          className="w-full h-full flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage?.url}
            alt={selectedImage?.caption}
            className="max-w-[95vw] max-h-[95vh] object-contain"
          />
        </div>
      </Modal>
    </div>
  )
}