import { getNewPath, getPathObject } from '@helper/path';
import TerminalStore from '@helper/terminal-store';
import { isEmpty, replace } from 'lodash';

export const cdCommend = (commend: string) => {
  const { setTerminalPath, setNewCommend } = TerminalStore.getState();
  const path = replace(commend, 'cd ', '');

  const newPath = getNewPath(path);
  const currentPathData = getPathObject(newPath);

  if (!isEmpty(currentPathData)) {
    setTerminalPath(newPath);
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
