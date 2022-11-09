import TerminalStore from '@helper/terminal-store';

export const helpCommend = () => {
  const { setNewCommend } = TerminalStore.getState();
  setNewCommend({
    commend: 'help',
    result: {
      lines: [
        'll: for show directories',
        'code <path>: open code',
        'clear: clear terminal',
        'open <path>: open files',
      ],
    },
  });
};
