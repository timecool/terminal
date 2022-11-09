import ImageModal from '@components/image-modal';
import TerminalCommends from '@components/terminal-commends';
import TerminalInput from '@components/terminal-input';
import TerminalLine from '@components/terminal-line';
import TerminalStore from 'helper/terminal-store';
import { map } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

const Index = () => {
  const terminalInput = useRef<HTMLInputElement>();
  const commands = TerminalStore((state) => state.commands);
  const openImages = TerminalStore((state) => state.openImages);
  const setTerminalInput = TerminalStore((state) => state.setTerminalInput);
  const [c, setC] = useState(false);
  const [ctrl, setCtrl] = useState(false);

  const focusTerminalInput = () => {
    terminalInput.current?.focus();
  };
  useEffect(() => {
    if (c && ctrl) {
      setTerminalInput('');
    }
  }, [c, ctrl]);
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Control') setCtrl(true);
      if (e.key === 'c') setC(true);
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Control') setCtrl(false);
      if (e.key === 'c') setC(false);
    });

    return () => {
      window.removeEventListener('keydown', () => {});
      window.removeEventListener('keyup', () => {});
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {map(openImages, (image, i) => (
        <ImageModal
          image={image}
          position={{ x: 370 + i * 10, y: 170 + i * 10 }}
        />
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
