"use client";
import { useState } from "react";
import { Tooltip } from "~/components/Tooltip";

const copyTextToClipboard = async (text: string) => {
  return await navigator.clipboard.writeText(text);
};

type CopyToClipboardButtonProps = {
  text: string;
};

export const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = (
  props: CopyToClipboardButtonProps
) => {
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
    <span className="">
      <button
        onClick={() => handleCopyClick(props.text)}
        className="hover:text-slate-300"
      >
        <p className="overflow-auto break-all text-left">{props.text}</p>
      </button>
      {isCopied ? <Tooltip tooltipContent="Copied!" /> : ""}
    </span>
  );
};
