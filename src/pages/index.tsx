import ImageModal from '@components/modal/image-modal';
import PdfModal from '@components/modal/pdf-modal';
import TerminalCommends from '@components/terminal-commends';
import TerminalInput from '@components/terminal-input';
import TerminalLine from '@components/terminal-line';
import TerminalStore from 'helper/terminal-store';
import { map } from 'lodash';
import React, { useRef } from 'react';

const Index = () => {
  const terminalInput = useRef<HTMLInputElement>();
  const commands = TerminalStore((state) => state.commands);
  const openImages = TerminalStore((state) => state.openImages);
  const openPdfs = TerminalStore((state) => state.openPdfs);

  const focusTerminalInput = () => {
    terminalInput.current?.focus();
  };

  return (
    <div>
      {map(openImages, (image, i) => (
        <ImageModal
          image={image}
          position={{ x: 370 + i * 10, y: 170 + i * 10 }}
        />
      ))}
      {map(openPdfs, (pdf, i) => (
        <PdfModal pdf={pdf} position={{ x: 370 + i * 10, y: 10 + i * 10 }} />
      ))}

      <main className="bg-slate-800 min-h-screen" onClick={focusTerminalInput}>
        <div className="w-full px-5 pt-6">
          <TerminalLine line="Welcome to the Terminal about Vincent" />
          <TerminalLine line="You need help, use the commend help" />
          {map(commands, (com) => (
            <TerminalCommends commend={com} />
          ))}
          <TerminalInput inputRef={terminalInput} />
        </div>
      </main>
    </div>
  );
};

export default Index;
