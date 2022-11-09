import { paths, projects } from '@helper/data';
import TerminalStore from '@helper/terminal-store';
import { includes, replace, size, split } from 'lodash';

export const cdCommend = (commend: string) => {
  const { setTerminalPath, terminalPath, setNewCommend } =
    TerminalStore.getState();
  const path = replace(commend, 'cd ', '');

  if (path === '..') {
    const pathArray = split(terminalPath, '/');
    if (size(pathArray) > 1) setTerminalPath(pathArray[0]);
    else setTerminalPath('');
    setNewCommend({
      commend,
    });
    return;
  }
  if (includes(path, '.')) {
    setNewCommend({
      commend,
      result: {
        lines: ['This is not a folder'],
        error: true,
      },
    });
    return;
  }
  if (includes(paths, path) && !terminalPath) {
    setTerminalPath(path);
    setNewCommend({
      commend,
    });
    return;
  }
  if (terminalPath === 'projects') {
    if (includes(projects, path)) {
      setTerminalPath(`${terminalPath}/${path}`);
      setNewCommend({
        commend,
      });
      return;
    }
  }

  setNewCommend({
    commend,
    result: {
      lines: ['path not found'],
      error: true,
    },
  });
};
