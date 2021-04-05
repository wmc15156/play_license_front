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
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const date = new Date();
const currMonth = date.getMonth() + 1;

const data = [
  {
    id: 1,
    name: `${currMonth - 2}월`,
    amt: 30000,
  },
  {
    id: 2,
    name: `${currMonth - 1}월`,
    amt: 71230,
  },
  {
    id: 3,
    name: `${currMonth}월`,
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
    const tooltipColors = [color.orange, color.blue, color.blue_2];
    payload.color = tooltipColors;

    if (active && payload && payload.length && payload[0].payload.id !== 3) {
      return (
        <div>
          <Balloon_Left
            style={{
              color: payload.color[payload[0].payload.id - 1],
              backgroundColor: color.white,
              padding: "14px 6px",
              borderRadius: "8px",
              border: `1px solid ${color.black4}`,
            }}
          >{`${payload[0].value}원`}</Balloon_Left>
        </div>
      );
    } else if (
      active &&
      payload &&
      payload.length &&
      payload[0].payload.id === 3
    ) {
      return (
        <div>
          <Balloon_Right
            style={{
              color: payload.color[payload[0].payload.id - 1],
              backgroundColor: color.white,
              padding: "14px 6px",
              borderRadius: "8px",
              border: `1px solid ${color.black4}`,
            }}
          >{`${payload[0].value}원`}</Balloon_Right>
        </div>
      );
    }

    return null;
  };

  return (
    <Container>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={data} margin={0}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
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
    </Container>
  );
};

const Container = styled.div`
  max-width: 350px;
  width: 100%;
  height: 150px;
`;

const Balloon_Left = styled.p`
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 10px solid ${color.black4};
    border-bottom: 7px solid transparent;
    left: -10px;
  }
`;

const Balloon_Right = styled.p`
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-left: 10px solid ${color.black4};
    border-bottom: 7px solid transparent;
    right: -10px;
  }
`;

export default Chart;
