import React from 'react';

interface IProps {
  line: string;
}
const TerminalLine = ({ line }: IProps) => {
  return (
    <>
      <div className="flex">
        <div className=" text-green-600 font-black pr-3">{'>'}</div>
        <div className="text-white">{line}</div>;
      </div>
    </>
  );
};

export default TerminalLine;
