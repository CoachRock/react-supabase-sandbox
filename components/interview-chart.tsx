"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", interviews: 65 },
  { name: "Feb", interviews: 78 },
  { name: "Mar", interviews: 92 },
  { name: "Apr", interviews: 85 },
  { name: "May", interviews: 110 },
  { name: "Jun", interviews: 125 },
  { name: "Jul", interviews: 132 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border p-2 rounded-lg shadow-sm">
        <p className="text-sm">{`${label}: ${payload[0].value} interviews`}</p>
      </div>
    );
  }
  return null;
};

export function InterviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interview Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data}
              margin={{ top: 5, right: 30, bottom: 20, left: 10 }}
            >
              <XAxis 
                dataKey="name"
                stroke="currentColor"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                padding={{ left: 10, right: 10 }}
                scale="point"
                interval="preserveStartEnd"
              />
              <YAxis
                stroke="currentColor"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                width={40}
                padding={{ top: 10, bottom: 0 }}
                allowDecimals={false}
                scale="linear"
                domain={['auto', 'auto']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="interviews"
                stroke="rgb(59, 130, 246)"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 6, fill: "rgb(59, 130, 246)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}