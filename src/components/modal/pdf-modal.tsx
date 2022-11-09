/* eslint-disable tailwindcss/no-custom-classname */
import TerminalStore from '@helper/terminal-store';
import { replace } from 'lodash';
import type { IPdf } from 'model/pdf';
import React from 'react';
import Draggable from 'react-draggable';

interface IProps {
  pdf: IPdf;
  position: { x: number; y: number };
}
const PdfModal = ({ position, pdf }: IProps) => {
  const closeOnePdf = TerminalStore((state) => state.closeOnePdf);

  const handler = replace(pdf.name, '.pdf', `-${pdf.id}`);
  return (
    <>
      <Draggable handle={`.${handler}`} scale={1} defaultPosition={position}>
        <div className={`${handler} bg-white rounded-lg absolute`}>
          <div className="bg-black h-8 w-full rounded-t-lg">
            <div className="text-white pl-3 font-black pt-0.5 float-left">
              {pdf.name}
            </div>
            <div className="w-8 h-8 hover:bg-red-600 rounded-tr-lg self-end cursor-pointer float-right">
              <div
                onClick={() => {
                  closeOnePdf(pdf.id);
                }}
                className="flex items-center justify-center pt-0.5  text-white font-black "
              >
                x
              </div>
            </div>
          </div>
          <div>
            <div>
              <iframe
                height={740}
                width={1000}
                src={`/assets/pdfs/${pdf.name}`}
              />
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
};

export default PdfModal;
