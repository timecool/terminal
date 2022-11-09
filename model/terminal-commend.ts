export interface ITerminalCommends {
  commend: string;
  result?: {
    lines: string[];
    error?: boolean;
  };
}
