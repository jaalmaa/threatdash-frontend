"use client";
import { useState } from "react";

const copyTextToClipboard = async (text: string) => {
  return await navigator.clipboard.writeText(text);
};

export const CopyToClipboardButton = (props: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (text: string) => {
    copyTextToClipboard(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  };

  return (
    <span className="flex flex-row justify-between">
      <button
        onClick={() => handleCopyClick(props.text)}
        className="hover:text-slate-300"
      >
        <p className="overflow-auto break-all text-left">{props.text}</p>
      </button>
      {isCopied ? <div className="text-white">Copied!</div> : ""}
    </span>
  );
};
