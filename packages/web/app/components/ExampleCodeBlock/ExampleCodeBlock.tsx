import React, { useState } from 'react';
import checkmark from '../../assets/checkmark.svg';
import copy from '../../assets/copy.svg';
import classes from './ExampleCodeBlock.module.css';

interface CodeBlockProps {
  text: string;
}

const ExampleCodeBlock: React.FC<CodeBlockProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={classes.container}>
      <code className={classes.code}>{text}</code>
      <div
        className={classes.copy}
        onClick={handleCopy}
        onKeyPress={handleCopy}
        role="button"
        tabIndex={0}
      >
        <img src={copied ? checkmark : copy} alt="Copy to clipboard." />
      </div>
    </div>
  );
};

export default ExampleCodeBlock;
