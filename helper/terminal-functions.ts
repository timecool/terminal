import TerminalStore from 'helper/terminal-store';
import { includes } from 'lodash';

import { cdCommend } from './commends/cd';
import { clearCommend } from './commends/clear';
import { helpCommend } from './commends/help';
import { listPathsCommend } from './commends/list';
import { openCommend } from './commends/open';

const commendNotFound = (commend: string) => {
  const { setNewCommend } = TerminalStore.getState();
  setNewCommend({
    commend,
    result: {
      lines: ['Commend not found'],
      error: true,
    },
  });
};

export const findCommend = (commend: string) => {
  if (commend === 'help') {
    helpCommend();
    return;
  }

  if (commend === 'll') {
    listPathsCommend();
    return;
  }

  if (includes(commend, 'cd')) {
    cdCommend(commend);
    return;
  }
  if (commend === 'clear') {
    clearCommend();
    return;
  }

  if (includes(commend, 'code')) {
    return;
  }

  if (includes(commend, 'open')) {
    openCommend(commend);
    return;
  }

  commendNotFound(commend);
};
