import { map } from 'lodash';
import type { ITerminalCommends } from 'model/terminal-commend';
import React from 'react';

import CommendLine from './commend-line';

interface IProps {
  commend: ITerminalCommends;
}
const TerminalCommends = ({ commend }: IProps) => {
  return (
    <>
      <div className="flex">
        <div className=" text-green-600 font-black pr-3">{'>'}</div>
        <div className="text-white">{commend.commend}</div>
      </div>
      {map(commend?.result?.lines, (l) => (
        <CommendLine line={l} error={commend.result?.error} />
      ))}
    </>
  );
};

export default TerminalCommends;
