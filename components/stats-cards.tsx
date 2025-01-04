"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Calendar, CheckCircle2, Clock } from "lucide-react";

export function StatsCards() {
  const stats = [
    {
      title: "Total Interviews",
      value: "2,853",
      description: "This month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Scheduled",
      value: "48",
      description: "Next 7 days",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Completed",
      value: "1,247",
      description: "Last 30 days",
      icon: CheckCircle2,
      color: "text-yellow-600",
    },
    {
      title: "Avg. Duration",
      value: "45min",
      description: "Per interview",
      icon: Clock,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        // Reorder items for sm breakpoint (2 columns)
        const order = index < 2 ? "sm:order-first" : "sm:order-last";
        
        return (
          <Card key={stat.title} className={order}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}