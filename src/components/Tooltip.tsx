export type TooltipProps = {
  tooltipContent: string;
};

export const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  return (
    <div className="transition-all">
      <div className="absolute z-50 mx-16 -mt-16 rounded-lg">
        <div className="rounded bg-slate-800 px-4 py-2 font-sans">
          {props.tooltipContent}
          <svg
            className="absolute left-0 top-full h-2 w-full text-slate-800"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
    </div>
  );
};
