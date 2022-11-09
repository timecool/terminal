import { paths } from '@helper/data';
import TerminalStore from '@helper/terminal-store';
import { includes, replace } from 'lodash';

export const cdCommend = (commend: string) => {
  const { setTerminalPath, terminalPath, setNewCommend } =
    TerminalStore.getState();
  const path = replace(commend, 'cd ', '');
  if (path === '..') {
    setTerminalPath('');
    setNewCommend({
      commend,
    });
    return;
  }
  const isAPath = includes(paths, path);

  if (isAPath && !terminalPath) {
    setTerminalPath(path);
    setNewCommend({
      commend,
    });
    return;
  }
  setNewCommend({
    commend,
    result: {
      lines: ['path not found'],
      error: true,
    },
  });
};
