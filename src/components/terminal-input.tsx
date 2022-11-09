import { faCoffee, faFolder, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findCommend } from 'helper/terminal-functions';
import TerminalStore from 'helper/terminal-store';
import { size } from 'lodash';
import React, { useState } from 'react';

interface IProps {
  inputRef: any;
}

const TerminalInput = ({ inputRef }: IProps) => {
  const commands = TerminalStore((state) => state.commands);
  const terminalInput = TerminalStore((state) => state.terminalInput);
  const setTerminalInput = TerminalStore((state) => state.setTerminalInput);

  const terminalPath = TerminalStore((state) => state.terminalPath);

  const commandsSize = size(commands) - 1;

  const [commandIndex, setCommandIndex] = useState(-1);

  const sendOnEnter = (keyCode: string) => {
    if (keyCode === 'Enter') {
      findCommend(terminalInput);
      setTerminalInput('');
      setCommandIndex(-1);
    }
    if (keyCode === 'ArrowUp') {
      const i = commandIndex + 1;
      const index = commandsSize - i;
      if (index <= commandsSize && index >= 0) {
        setTerminalInput(commands[index]?.commend || '');
        setCommandIndex(i);
      }
    }
    if (keyCode === 'ArrowDown') {
      const i = commandIndex - 1;
      const index = commandsSize - i;
      if (i === -1) {
        setTerminalInput('');
        setCommandIndex(i);
      }
      if (index <= commandsSize && index >= 0) {
        setTerminalInput(commands[index]?.commend || '');
        setCommandIndex(i);
      }
    }
  };

  return (
    <div className="flex pt-2">
      <div className="px-3 bg-white rounded-l-xl">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div className="bg-teal-500 px-3 text-white font-black rounded-r-xl">
        <div className="flex">
          {!terminalPath ? (
            <>
              <FontAwesomeIcon icon={faHome} className="pr-2 pt-1" />
              {'/~'}
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faFolder} className="pr-2 pt-1" />/
              {terminalPath}
            </>
          )}
        </div>
      </div>
      <div className="pl-3 w-full">
        <input
          ref={inputRef}
          onKeyDown={(key) => sendOnEnter(key.code)}
          value={terminalInput}
          onChange={(input) => setTerminalInput(input.target.value)}
          type="text"
          className="w-full text-white bg-transparent outline-0"
        />
      </div>
    </div>
  );
};

export default TerminalInput;
