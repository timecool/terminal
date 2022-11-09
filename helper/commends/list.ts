import { images, paths } from '@helper/data';
import TerminalStore from '@helper/terminal-store';

export const listPathsCommend = () => {
  const { setNewCommend, terminalPath } = TerminalStore.getState();
  if (!terminalPath) {
    setNewCommend({
      commend: 'll',
      result: {
        lines: paths,
      },
    });
  }
  if (terminalPath === 'images') {
    setNewCommend({
      commend: 'll',
      result: {
        lines: images,
      },
    });
  }
};
