/* eslint-disable tailwindcss/no-custom-classname */
import TerminalStore from '@helper/terminal-store';
import { replace } from 'lodash';
import type { IImage } from 'model/image';
import React from 'react';
import Draggable from 'react-draggable';

interface IProps {
  image: IImage;
  position: { x: number; y: number };
}
const ImageModal = ({ position, image }: IProps) => {
  const handler = replace(image.name, '.jpg', `-${image.id}`);
  const closeOneImages = TerminalStore((state) => state.closeOneImages);
  return (
    <>
      <Draggable handle={`.${handler}`} scale={1} defaultPosition={position}>
        <div className={`${handler} bg-white rounded-lg absolute`}>
          <div className="bg-black h-8 w-full rounded-t-lg">
            <div className="text-white pl-3 font-black pt-0.5 float-left">
              {image.name}
            </div>
            <div className="w-8 h-8 hover:bg-red-600 rounded-tr-lg self-end cursor-pointer float-right">
              <div
                onClick={() => {
                  closeOneImages(image.id);
                }}
                className="flex items-center justify-center pt-0.5  text-white font-black "
              >
                x
              </div>
            </div>
          </div>
          <div>
            <img
              src={`/assets/images/${image.name}`}
              className="flex items-center"
              alt={image.name}
              style={{ height: 700 }}
            />
          </div>
        </div>
      </Draggable>
    </>
  );
};

export default ImageModal;
