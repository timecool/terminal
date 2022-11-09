import React from 'react';

interface IProps {
  line: string;
  error?: boolean;
}
const CommendLine = ({ line, error }: IProps) => {
  return (
    <>
      <div className={`${error ? 'text-red-700' : 'text-white'} pl-6`}>
        {line}
      </div>
    </>
  );
};

export default CommendLine;
