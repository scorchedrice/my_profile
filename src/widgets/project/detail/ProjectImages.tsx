<<<<<<< HEAD
// @ts-ignore
import * as React from 'react';
=======
>>>>>>> d256ce2e3063baeb99ce3abba9fda3e8ededb261
import {ProjectDetailType} from "../../../shared/types/globalTypes.ts";
import Modal from "react-modal";
import {useState} from "react";
import type { Styles } from "react-modal";

type DescriptionProps = Pick<ProjectDetailType, 'images'>

const imgModalStyle : Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'absolute',
    inset: 0,
    border: 'none',
    background: 'transparent',
    overflow: 'hidden',
    padding: 0,
    width: '100vw',
    height: '100vh'
  }
}

export default function ProjectImages({ images } : DescriptionProps) {
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
        style={imgModalStyle}
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