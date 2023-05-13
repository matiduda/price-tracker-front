import { Line } from "react-chartjs-2";
import { ReactElement, useEffect, useState } from "react";
import { ItemsApi } from "../../api/ItemsApi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Flex, Button } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Item = {
  id: number;
  name: string;
};

type Props = {
  item: Item;
};

type PriceResponse = {
  id: number; // NOT NECESSARY
  item_id: number; // NOT NECESSARY
  date: string;
  price: number;
};

type ChartData = {
  labels: string[];
  datasets: any;
};

const Chart = ({ item }: Props): ReactElement => {
  const [data, setData] = useState<ChartData>({
    labels: [],
    datasets: null,
  });

  useEffect(() => {
    console.log(item);
    ItemsApi.getPricesForItem(item.id).then((response: PriceResponse[]) => {
      response = response.sort(
        (first: PriceResponse, second: PriceResponse) =>
          Date.parse(first.date) - Date.parse(second.date)
      );
      const data = {
        labels: response.map((price: PriceResponse) => price.date),
        datasets: [
          {
            data: response.map((price: PriceResponse) => price.price),
            borderColor: "rgb(0, 255, 255)",
            borderWidth: 2,
            backgroundColor: "rgb(255, 99, 132)",
          },
        ],
      };
      setData(data);
    });
  }, []);

  // THIS IS FOR CHART STYLING
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        color: "white",
        font: {
          size: 22,
        },
        text: item.name.toUpperCase(),
      },
    },
  };

  return data.datasets === null ? (
    <h1>Loading chart ...</h1>
  ) : (
    <Line options={chartOptions} data={data} />
  );
};

export default Chart;
