import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { SessionDay } from "~/server/api/routers/sessiondata";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: "lightgray",
      },
    },
    y: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      color: "lightgray",
      text: "Successful Attacks over Time",
    },
  },
};

type EventsHistogramProps = {
  EventsByDay: SessionDay;
  MaximumDisplayedDays: number;
};

export const EventsHistogram: React.FC<EventsHistogramProps> = (
  props: EventsHistogramProps
) => {
  const labels = Object.keys(props.EventsByDay).slice(
    -props.MaximumDisplayedDays
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Successful Attacks",
        data: Object.values(props.EventsByDay).slice(
          -props.MaximumDisplayedDays
        ),
        backgroundColor: "rgba(226, 232, 240, 0.75)",
      },
    ],
  };

  return (
    <div className="h-full max-h-full w-full max-w-full">
      <Bar options={options} data={data} />
    </div>
  );
};
