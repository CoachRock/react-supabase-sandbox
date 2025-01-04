"use client";

import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { ArchivedJob } from '@/lib/data/mock-archived-jobs';

interface JobCardProps {
  job: ArchivedJob;
  onReactivateChange: (jobId: string, checked: boolean) => void;
  reactivateStates: { [key: string]: boolean };
}

export function JobCard({ job, onReactivateChange, reactivateStates }: JobCardProps) {
  const pathname = usePathname();

  return (
    <Card className="p-4 sm:p-6">
      <div className="space-y-4 sm:space-y-6">
        {/* Job Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-500">
            {job.title} - {job.id}
          </h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-black dark:text-white" />
            <span>{job.location.city}, {job.location.state}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap gap-1 rounded-lg bg-muted p-1">
          {[
            { name: 'Applicants', count: job.tabs.applicants, href: '/applicants' },
            { name: 'Invitations', count: job.tabs.invitations, href: '/invitations' },
            { name: 'Completed Interviews', count: job.tabs.completed, href: '/completed-interviews' },
            { name: 'Reviewed', count: job.tabs.reviewed, href: '/reviewed' }
          ].map((tab) => (
            <div
              key={tab.name}
              className={cn(
                "flex-1 px-3 py-2 text-sm font-medium rounded-md text-center whitespace-nowrap text-muted-foreground cursor-not-allowed",
                pathname === tab.href && "bg-blue-600/50"
              )}
            >
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              {' - '}{tab.count}
            </div>
          ))}
        </div>

        {/* Job Details */}
        <div className="flex flex-col sm:flex-row justify-between text-sm gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black dark:text-white">Hiring Manager:</span>
            <span className="text-muted-foreground">{job.hiringManager}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-black dark:text-white">Posted:</span>
            <span className="text-muted-foreground">{job.posted}</span>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="space-y-4">
          <h3 className="font-bold text-black dark:text-white">Final Thoughts:</h3>
          <p className="text-base text-red-500">
            <span className="text-red-500 font-bold">{job.finalThoughts.candidateName}</span>
            {' '}{job.finalThoughts.feedback}{' '}
            <span className="text-red-500 font-bold">{job.finalThoughts.candidateName}</span>
            {' '}for the{' '}
            <span className="text-red-500 font-bold">{job.finalThoughts.position}</span>
            {' '}position.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`reactivate-${job.id}`}
                checked={reactivateStates[job.id] || false}
                onCheckedChange={(checked) => onReactivateChange(job.id, checked as boolean)}
              />
              <label
                htmlFor={`reactivate-${job.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Re-activate This Job
              </label>
            </div>
            {reactivateStates[job.id] && (
              <Button className="bg-blue-500 hover:bg-blue-600">
                Reactivate This Job
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}