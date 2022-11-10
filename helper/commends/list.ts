import { getNewPathObject } from '@helper/path';
import TerminalStore from '@helper/terminal-store';
import { has, keys, pull, replace } from 'lodash';

export const listPathsCommend = (commend: string) => {
  const { setNewCommend } = TerminalStore.getState();

  let path = replace(commend, 'll', '');
  path = replace(path, ' ', '');
  const currentPathObject = getNewPathObject(path);

  let objectKeys;

  if (has(currentPathObject, 'files')) {
    const keysOfPaths = keys(currentPathObject);
    const { files } = currentPathObject;
    objectKeys = [...pull(keysOfPaths, 'files'), ...files];
  } else objectKeys = keys(currentPathObject);
  setNewCommend({
    commend,
    result: {
      lines: objectKeys,
    },
  });
};
