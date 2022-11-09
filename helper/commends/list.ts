import { images, paths, projects, thesis } from '@helper/data';
import TerminalStore from '@helper/terminal-store';
import { includes } from 'lodash';

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
  if (terminalPath === 'projects') {
    setNewCommend({
      commend: 'll',
      result: {
        lines: projects,
      },
    });
  }
  if (includes(terminalPath, 'bachelor-thesis')) {
    setNewCommend({
      commend: 'll',
      result: {
        lines: thesis,
      },
    });
  }
};
