"use client";

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils/date-formatter';

interface Job {
  id: string;
  title: string;
  location: string;
  posted: string;
  status: 'active' | 'draft';
}

const mockJobs: Job[] = [
  {
    id: 'JOB001',
    title: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    posted: '2024-03-15',
    status: 'active'
  },
  {
    id: 'JOB002',
    title: 'Product Manager',
    location: 'New York, NY',
    posted: '2024-03-14',
    status: 'active'
  },
  {
    id: 'JOB004',
    title: 'UX Designer',
    location: 'Austin, TX',
    posted: '2024-03-16',
    status: 'draft'
  }
];

interface ManageJobsTableProps {
  searchQuery: string;
  statusFilter: string;
}

export function ManageJobsTable({ searchQuery, statusFilter }: ManageJobsTableProps) {
  const [jobs] = useState<Job[]>(mockJobs);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500 hover:bg-green-600';
      case 'draft':
        return 'bg-yellow-500 hover:bg-yellow-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent rounded-t-lg">
            <TableHead className="bg-black dark:bg-[#ABABAB] text-white dark:text-black font-semibold rounded-tl-lg">Posted Date</TableHead>
            <TableHead className="bg-black dark:bg-[#ABABAB] text-white dark:text-black font-semibold">Job Title</TableHead>
            <TableHead className="bg-black dark:bg-[#ABABAB] text-white dark:text-black font-semibold">Location</TableHead>
            <TableHead className="bg-black dark:bg-[#ABABAB] text-white dark:text-black font-semibold text-center">Status</TableHead>
            <TableHead className="bg-black dark:bg-[#ABABAB] text-white dark:text-black font-semibold rounded-tr-lg text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{formatDate(job.posted)}</TableCell>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell className="text-center">
                <Badge className={cn(getStatusColor(job.status), "capitalize")}>
                  {job.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <Button 
                    variant="outline"
                    className="bg-blue-500 hover:bg-blue-600 text-white hover:text-white"
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="outline"
                    className="bg-blue-500 hover:bg-red-600 text-white hover:text-white transition-colors"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}