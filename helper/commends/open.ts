import { getNewPathObject } from '@helper/path';
import TerminalStore from '@helper/terminal-store';
import { find, has, includes, last, replace, size } from 'lodash';

export const openCommend = (commend: string) => {
  const {
    setNewOpenImages,
    setNewCommend,
    setNewOpenPdf,
    openImages,
    openPdfs,
  } = TerminalStore.getState();
  const regex = /.([^.]+)$/;
  const path = replace(commend, 'open ', '');
  if (path.match(regex)) {
    const pathArray = path.split('/');
    const file = last(pathArray);
    pathArray.pop();
    const pathObject = getNewPathObject(replace(path, file, ''));

    if (has(pathObject, 'files') && includes(pathObject.files, file)) {
      if (file.endsWith('.jpg') || file.endsWith('.png')) {
        setNewOpenImages({ name: file, id: size(openImages) });
        setNewCommend({
          commend,
        });
        return;
      }
      if (file.endsWith('.pdf')) {
        setNewOpenPdf({ name: file, id: size(openPdfs) });
        setNewCommend({
          commend,
        });
        return;
      }
    }

    if (has(pathObject, 'linkData')) {
      const linkObject = find(pathObject.linkData, (g) => g.name === file);
      window.open(linkObject.link, '_blank');
      setNewCommend({
        commend,
      });
      return;
    }
  }

  setNewCommend({
    commend,
    result: {
      lines: ['Path not found'],
      error: true,
    },
  });
};
