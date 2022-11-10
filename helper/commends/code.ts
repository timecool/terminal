import { getNewPathObject } from '@helper/path';
import TerminalStore from '@helper/terminal-store';
import { find, has, last, replace } from 'lodash';

export const codeCommend = (commend: string) => {
  const { setNewCommend } = TerminalStore.getState();
  const regex = /.([^.]+)$/;
  const path = replace(commend, 'code ', '');
  if (path.match(regex)) {
    const pathArray = path.split('/');
    const file = last(pathArray);
    pathArray.pop();
    const pathObject = getNewPathObject(replace(path, file, ''));

    if (has(pathObject, 'git')) {
      const gitObject = find(pathObject.git, (g) => g.name === file);
      window.open(replace(gitObject.link, '.com', '.dev'), '_blank');
      setNewCommend({
        commend,
      });
      return;
    }
  }

  setNewCommend({
    commend,
    result: {
      lines: ['Code not found'],
      error: true,
    },
  });
};
