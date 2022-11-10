import { filter } from 'lodash';
import type { IImage } from 'model/image';
import type { IPdf } from 'model/pdf';
import type { ITerminalCommends } from 'model/terminal-commend';
import create from 'zustand';

interface TerminalState {
  commands: ITerminalCommends[];
  terminalInput: string;
  terminalPath: string[];
  openImages: IImage[];
  openPdfs: IPdf[];

  closeOnePdf: (id: number) => void;
  setNewOpenPdf: (openPdf: IPdf) => void;

  closeOneImages: (id: number) => void;
  setNewOpenImages: (openImage: IImage) => void;

  setTerminalPath: (terminalPath: string[]) => void;
  setTerminalInput: (terminalInput: string) => void;
  clearCommends: () => void;
  setNewCommend: (command: ITerminalCommends) => void;
}

const TerminalStore = create<TerminalState>((set, get) => ({
  commands: [],
  terminalInput: '',
  terminalPath: [],
  openImages: [],
  openPdfs: [],

  closeOnePdf: (id: number) =>
    set(() => ({
      openPdfs: filter(get().openPdfs, (pdf) => pdf.id !== id) || [],
    })),
  setNewOpenPdf: (openPdf: IPdf) =>
    set(() => ({ openPdfs: [...get().openPdfs, openPdf] })),

  closeOneImages: (id: number) =>
    set(() => ({
      openImages: filter(get().openImages, (img) => img.id !== id) || [],
    })),
  setNewOpenImages: (openImage: IImage) =>
    set(() => ({ openImages: [...get().openImages, openImage] })),

  setTerminalPath: (terminalPath: string[]) => set(() => ({ terminalPath })),

  setTerminalInput: (terminalInput: string) => set(() => ({ terminalInput })),
  clearCommends: () => set(() => ({ commands: [] })),
  setNewCommend: (command: ITerminalCommends) =>
    set(() => ({ commands: [...get().commands, command] })),
}));

export default TerminalStore;
