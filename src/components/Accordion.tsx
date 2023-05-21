import { useState } from "react";
import type { ReactNode } from "react";

export type AccordionProps = {
  displayName: string;
  children: ReactNode;
};

export const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
  const [showChildren, setshowChildren] = useState<boolean>(true);
  return (
    <div className="mx-auto my-2 max-w-full">
      <div
        className="cursor-pointer"
        onClick={() => setshowChildren(!showChildren)}
      >
        <details className="group" open>
          <summary className="list-none">
            <span className="mb-1 flex flex-row justify-between text-sm font-semibold">
              {props.displayName}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 pt-1 transition-all duration-300 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </span>
          </summary>
        </details>
        <div className={showChildren ? "" : "hidden"}>{props.children}</div>
      </div>
    </div>
  );
};
