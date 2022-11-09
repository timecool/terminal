import TerminalStore from '@helper/terminal-store';

export const clearCommend = () => {
  const { clearCommends } = TerminalStore.getState();
  clearCommends();
};
