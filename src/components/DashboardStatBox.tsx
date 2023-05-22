type dashboardStatBoxProps = {
  displayName: string;
  displayValue: number;
};

export const DashboardStatBox: React.FC<dashboardStatBoxProps> = (
  props: dashboardStatBoxProps
) => {
  return (
    <div className="mx-4 flex h-full w-1/3 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg">
      {props.displayName}
      <span className="m-auto text-6xl">{props.displayValue}</span>
    </div>
  );
};
