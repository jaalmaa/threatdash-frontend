export type DashboardStatBoxProps = {
  displayName: string;
  displayValue: number;
};

const DashboardStatBox: React.FC<DashboardStatBoxProps> = (
  props: DashboardStatBoxProps
) => {
  return (
    <div className="mx-4 flex h-full flex-1 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg 2xl:text-xl">
      {props.displayName}
      <span className="m-auto text-6xl">{props.displayValue}</span>
    </div>
  );
};

type DashboardStatsProps = {
  data: DashboardStatBoxProps[];
};

const DashboardStats: React.FC<DashboardStatsProps> = (
  props: DashboardStatsProps
) => {
  return (
    <>
      {props.data.map((stat: DashboardStatBoxProps, id: number) => {
        return (
          <DashboardStatBox
            key={id}
            displayName={stat.displayName}
            displayValue={stat.displayValue}
          />
        );
      })}
    </>
  );
};

export default DashboardStats;
