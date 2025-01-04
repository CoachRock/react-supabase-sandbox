"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const recentInterviews = [
  {
    candidate: "Sarah Miller",
    position: "Senior Developer",
    date: "Today, 2:00 PM",
    status: "Scheduled",
    initials: "SM",
  },
  {
    candidate: "John Davis",
    position: "Product Manager",
    date: "Today, 4:30 PM",
    status: "Scheduled",
    initials: "JD",
  },
  {
    candidate: "Emma Wilson",
    position: "UX Designer",
    date: "Yesterday",
    status: "Completed",
    initials: "EW",
  },
  {
    candidate: "Michael Brown",
    position: "DevOps Engineer",
    date: "Yesterday",
    status: "Completed",
    initials: "MB",
  },
];

export function RecentInterviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Interviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentInterviews.map((interview) => (
            <div
              key={interview.candidate}
              className="flex items-center"
            >
              <Avatar className="h-9 w-9">
                <AvatarFallback>
                  {interview.initials}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1 flex-1 min-w-0">
                <p className="text-sm font-medium leading-none truncate">
                  {interview.candidate}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {interview.position}
                </p>
              </div>
              <div className="ml-4 text-sm text-right shrink-0">
                <p className="font-medium">{interview.date}</p>
                <p className={`text-xs ${
                  interview.status === "Completed" 
                    ? "text-green-500" 
                    : "text-blue-500"
                }`}>
                  {interview.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}