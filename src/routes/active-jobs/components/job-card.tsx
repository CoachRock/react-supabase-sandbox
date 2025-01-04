"use client";

import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HiringTeam } from './hiring-team';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
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
            <Link
              key={tab.name}
              to={tab.href}
              className={cn(
                "flex-1 px-3 py-2 text-sm font-medium rounded-md text-center whitespace-nowrap",
                "transition-colors duration-200",
                "hover:bg-[#0087FF] hover:text-white"
              )}
            >
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              {' - '}{tab.count}
            </Link>
          ))}
        </div>

        {/* Job Details */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black dark:text-white">Hiring Manager:</span>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={job.hiringManager.avatar} alt={job.hiringManager.name} />
                <AvatarFallback>{job.hiringManager.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <span className="text-muted-foreground">{job.hiringManager.name}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-black dark:text-white">Hiring Assistants:</span>
              <HiringTeam jobId={job.id} assistants={job.hiringAssistants} />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-black dark:text-white">Posted:</span>
              <span className="text-muted-foreground">{job.posted}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}