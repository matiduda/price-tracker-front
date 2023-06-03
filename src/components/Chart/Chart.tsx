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
import { Flex, Button, Box } from "@chakra-ui/react";

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
  unfollowItem: (itemId: number) => void;
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

const Chart = ({ item, unfollowItem }: Props): ReactElement => {
  const [data, setData] = useState<ChartData>({
    labels: [],
    datasets: null,
  });
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
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
        color: "black",
        font: {
          size: 15,
        },
        text: item.name.toUpperCase(),
      },
    },
  };

  return data.datasets === null ? (
    <h1>Loading chart ...</h1>
  ) : (
    <Flex
      width="100%"
      height="100%"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "14px",
        padding: "20px",
      }}
      _hover={{ cursor: "pointer" }}
      transform={`scale(${scale})`}
      transition={"ease-in-out 1s all"}
      direction={"column"}
      justify={"center"}
      align={"center"}
      rowGap={3}
      onClick={() => setScale(scale === 1 ? 1.4 : 1)}
      onMouseLeave={() => setScale(1)}
    >
      <Box width="100%" height="90%">
        <Line options={chartOptions} data={data} />
      </Box>
      <Button
        padding={"10px"}
        width={"fit-content"}
        onClick={() => unfollowItem(item.id)}
      >
        Unfollow
      </Button>
    </Flex>
  );
};

export default Chart;
