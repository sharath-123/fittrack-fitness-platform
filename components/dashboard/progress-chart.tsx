"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    day: "Mon",
    progress: 40,
  },
  {
    day: "Tue",
    progress: 70,
  },
  {
    day: "Wed",
    progress: 55,
  },
  {
    day: "Thu",
    progress: 90,
  },
  {
    day: "Fri",
    progress: 65,
  },
  {
    day: "Sat",
    progress: 85,
  },
  {
    day: "Sun",
    progress: 100,
  },
];

export default function ProgressChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 xl:col-span-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">
          Weekly Progress
        </h3>

        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
          +12%
        </span>
      </div>

      {/* Chart */}
      <div className="mt-10 h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis
              dataKey="day"
              stroke="#71717a"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#09090b",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
              }}
            />

            <Bar
              dataKey="progress"
              radius={[20, 20, 0, 0]}
              fill="url(#gradient)"
            />

            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#06b6d4"
                />

                <stop
                  offset="100%"
                  stopColor="#8b5cf6"
                />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}