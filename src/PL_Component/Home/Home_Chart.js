// import styled from "styled-components";
// import color from "../../../styles/colors";
// import { useState, useCallback } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     id: 1,
//     name: "2월",
//     amt: 30000,
//   },
//   {
//     id: 2,
//     name: "3월",
//     amt: 71230,
//   },
//   {
//     id: 3,
//     name: "4월",
//     amt: 123123,
//   },
// ];

// const Chart = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeItem = data[activeIndex];

//   const handleClick = useCallback(
//     (entry, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );

//   const CustomTooltip = ({ active, payload }) => {
//     const tooltipColors = [color.orange, color.blue, color.blue_2];
//     payload.color = tooltipColors;

//     if (active && payload && payload.length) {
//       // console.log(payload[0].payload.id);
//       return (
//         <div className="custom-tooltip">
//           <p
//             className="label"
//             style={{
//               color: payload.color[payload[0].payload.id - 1],
//               backgroundColor: color.white,
//               padding: "14px 6px",
//               borderRadius: "8px",
//               border: `1px solid ${color.black4}`,
//             }}
//           >{`${payload[0].value}원`}</p>
//         </div>
//       );
//     }

//     return null;
//   };

//   return (
//     <Container>
//       <ResponsiveContainer width={"100%"} height={"100%"}>
//         <BarChart data={data} margin={0}>
//           {/* <CartesianGrid strokeDasharray="3 3" /> */}
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip content={<CustomTooltip />} />
//           <Bar dataKey="amt" onClick={handleClick} barSize={10}>
//             {data.map((entry, index) => {
//               const cellColors = [color.orange, color.blue, color.blue_2];
//               return (
//                 <Cell cursor="pointer" fill={cellColors[index]} key={index} />
//               );
//             })}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </Container>
//   );
// };

// const Container = styled.div`
//   max-width: 350px;
//   width: 100%;
//   height: 150px;
// `;

// export default Chart;
