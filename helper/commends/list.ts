import { getNewPathObject } from '@helper/path';
import TerminalStore from '@helper/terminal-store';
import { has, keys, map, pull, replace } from 'lodash';

export const listPathsCommend = (commend: string) => {
  const { setNewCommend } = TerminalStore.getState();

  let path = replace(commend, 'll', '');
  path = replace(path, ' ', '');
  const currentPathObject = getNewPathObject(path);

  const keysOfPaths = keys(currentPathObject);

  let objectKeys = keysOfPaths;

  if (has(currentPathObject, 'files')) {
    const { files } = currentPathObject;
    objectKeys = [...pull(objectKeys, 'files'), ...files];
  }
  if (has(currentPathObject, 'git')) {
    const { git } = currentPathObject;
    objectKeys = [...pull(objectKeys, 'git'), ...map(git, (g) => g.name)];
  }
  setNewCommend({
    commend,
    result: {
      lines: objectKeys,
    },
  });
};
