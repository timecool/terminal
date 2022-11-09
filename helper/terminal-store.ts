import { filter } from 'lodash';
import type { IImage } from 'model/image';
import type { ITerminalCommends } from 'model/terminal-commend';
import create from 'zustand';

interface TerminalState {
  commands: ITerminalCommends[];
  terminalInput: string;
  terminalPath: string;
  openImages: IImage[];

  closeOneImages: (id: number) => void;
  setNewOpenImages: (openImage: IImage) => void;
  setTerminalPath: (terminalPath: string) => void;
  setTerminalInput: (terminalInput: string) => void;
  clearCommends: () => void;
  setNewCommend: (command: ITerminalCommends) => void;
}

const TerminalStore = create<TerminalState>((set, get) => ({
  commands: [],
  terminalInput: '',
  terminalPath: '',
  openImages: [],

  closeOneImages: (id: number) =>
    set(() => ({
      openImages: filter(get().openImages, (img) => img.id !== id) || [],
    })),
  setNewOpenImages: (openImage: IImage) =>
    set(() => ({ openImages: [...get().openImages, openImage] })),
  setTerminalPath: (terminalPath: string) => set(() => ({ terminalPath })),
  setTerminalInput: (terminalInput: string) => set(() => ({ terminalInput })),
  clearCommends: () => set(() => ({ commands: [] })),
  setNewCommend: (command: ITerminalCommends) =>
    set(() => ({ commands: [...get().commands, command] })),
}));

export default TerminalStore;
