import { images, projects, thesis } from '@helper/data';
import TerminalStore from '@helper/terminal-store';
import { includes, replace, size } from 'lodash';

export const openCommend = (commend: string) => {
  const {
    terminalPath,
    setNewOpenImages,
    setNewCommend,
    setNewOpenPdf,
    openImages,
    openPdfs,
  } = TerminalStore.getState();

  if (terminalPath === 'images') {
    const name = replace(commend, 'open ', '');
    if (includes(images, name)) {
      setNewOpenImages({ name, id: size(openImages) });
      setNewCommend({
        commend,
      });
    }
    return;
  }

  if (
    terminalPath === 'projects' ||
    includes(terminalPath, 'bachelor-thesis')
  ) {
    const name = replace(commend, 'open ', '');
    if (includes(name, '.pdf') && includes([...projects, ...thesis], name)) {
      setNewOpenPdf({ name, id: size(openPdfs) });
      setNewCommend({
        commend,
      });
      return;
    }
    if (includes(name, '.git') && includes([...projects, ...thesis], name)) {
      setNewCommend({
        commend,
      });
      window.open(`https://github.com/timecool/${name}`, '_blank');
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
