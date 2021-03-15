import styled from "styled-components";
import color from "../../../styles/colors";
import { useState, useCallback } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2월",
    amt: 30000,
  },
  {
    name: "3월",
    amt: 71230,
  },
  {
    name: "4월",
    amt: 123123,
  },
];

const Chart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}원`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <Container>
      <ResponsiveContainer width={350} height={120}>
        <BarChart width={350} height={120} data={data} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amt" onClick={handleClick} barSize={10}>
            {data.map((entry, index) => {
              const cellColors = [color.orange, color.blue, color.blue_2];
              return (
                <Cell cursor="pointer" fill={cellColors[index]} key={index} />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p>{activeItem.amt}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Chart;
