import React, { useState } from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { EscalaEjeY } from "./EscalaEjeY";

const loadConfig = (storageKey) => ({
  max: localStorage.getItem(`${storageKey}_max`),
  min: localStorage.getItem(`${storageKey}_min`),
  ticks: localStorage.getItem(`${storageKey}_ticks`)
});

export function AverageChart({ data, storageKey }) {
  const [yAxisConfig, setYaxisConfig] = useState(() => {
    const config = loadConfig(storageKey);

    if (config.max === null && config.min === null && config.ticks === null)
      return { max: 75, min: 0, ticks: 6 };

    return config;
  });

  if (!data || !data.averageValues || !data.limits) return null;

  const { lower, middle, upper } = data.limits[0];

  return (
    <section>
      <section>
        <EscalaEjeY
          storageKey={storageKey}
          onConfigChange={() => {
            setYaxisConfig(loadConfig(storageKey));
          }}
        />
      </section>
      <ResponsiveContainer
        width="100%"
        height={350}>
        <LineChart
          style={{ outline: "none" }}
          accessibilityLayer
          data={data.averageValues}
          margin={{
            left: -5,
            right: 25
          }}>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#EFEFEF"
          />
          <XAxis
            dataKey="fecha"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => {
              const date = new Date(
                new Date(value).setDate(new Date(value).getDate() + 1)
              );
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
              });
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            dataKey="promedio"
            domain={[
              Number.parseFloat(yAxisConfig.min),
              Number.parseFloat(yAxisConfig.max)
            ]}
            tickCount={Number.parseInt(yAxisConfig.ticks)}
          />
          <ReferenceLine
            y={lower}
            stroke="#FBB03B"
            strokeDasharray="5 5"
            name="lower"
          />
          <ReferenceLine
            y={middle}
            stroke="#49D47C"
            strokeDasharray="5 5"
            name="middle"
          />
          <ReferenceLine
            y={upper}
            stroke="#F44016"
            strokeDasharray="5 5"
            name="upper"
          />
          <Tooltip />
          <Line
            dataKey="promedio"
            fill="#3474E0"
            dot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
