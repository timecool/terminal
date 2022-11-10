import { cloneDeep, concat, findIndex, has, isEmpty, remove } from 'lodash';

import { paths } from './data';
import TerminalStore from './terminal-store';

const stylePath = (path: string[]) => {
  if (isEmpty(path)) return path;
  const index = findIndex(path, (p) => p === '..');
  if (index < 0) return path;
  path.splice(index - 1, 2);
  return stylePath(path);
};
export const getNewPath = (path: string) => {
  const { terminalPath } = TerminalStore.getState();
  if (path === '') return terminalPath;
  const completePath = concat(terminalPath, path.split('/'));
  return stylePath(completePath);
};

const getPathObjectByData = (pathArray: string[], currentPathData: any) => {
  if (isEmpty(pathArray)) return currentPathData;
  if (has(currentPathData, pathArray[0])) {
    const result = currentPathData[pathArray[0]];
    pathArray.shift();
    return getPathObjectByData(pathArray, result);
  }
  return undefined;
};

export const getPathObject = (path: string[]) => {
  const clonePath = cloneDeep(path);
  remove(clonePath, (p) => isEmpty(p));
  return getPathObjectByData(clonePath, paths);
};

export const getNewPathObject = (path: string) => {
  const newPath = getNewPath(path);
  return getPathObject(newPath);
};
