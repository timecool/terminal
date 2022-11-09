import { images } from '@helper/data';
import TerminalStore from '@helper/terminal-store';
import { includes, replace, size } from 'lodash';

export const openCommend = (commend: string) => {
  const { terminalPath, setNewOpenImages, setNewCommend, openImages } =
    TerminalStore.getState();

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
  setNewCommend({
    commend,
    result: {
      lines: ['Path not found'],
      error: true,
    },
  });
};
