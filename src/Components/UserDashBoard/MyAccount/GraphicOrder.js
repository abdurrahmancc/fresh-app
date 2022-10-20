import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

const GraphicOrder = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 100,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 2500,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 1500,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3000,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 3000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 4200,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4500,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 5200,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 6800,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 8000,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 10000,
      amt: 2100,
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-[14px] shadow bg-white px-6 py-[14px]">
          <p className="text-primary text-sm">{`$${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={848}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#58AA26" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#58AA26" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid vertical={false} strokeDasharray="5 5" />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#58AA26"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default GraphicOrder;
