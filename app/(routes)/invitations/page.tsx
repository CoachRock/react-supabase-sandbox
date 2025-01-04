"use client";

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, X, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Candidate {
  id: string;
  name: string;
  coverLetter: boolean;
  score: string;
  status: 'In Progress' | 'Delivered' | 'Expired';
}

const mockCandidates: Candidate[] = [
  { id: '1', name: 'Johnson, Robert', coverLetter: true, score: '94%', status: 'In Progress' },
  { id: '2', name: 'Smith, Emily', coverLetter: true, score: '87%', status: 'Delivered' },
  { id: '3', name: 'Williams, Michael', coverLetter: false, score: '79%', status: 'Expired' },
  { id: '4', name: 'Brown, Sarah', coverLetter: false, score: '64%', status: 'Delivered' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-yellow-500 hover:bg-yellow-600';
    case 'Delivered':
      return 'bg-green-500 hover:bg-green-600';
    case 'Expired':
      return 'bg-red-500 hover:bg-red-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};

export default function Invitations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(mockCandidates);
  const pathname = usePathname();

  useEffect(() => {
    const filtered = mockCandidates.filter(candidate =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCandidates(filtered);
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Invitations" 
        description="Applicants who have been invited to do a virtual interview" 
      />

      <div className="flex flex-row justify-between items-center">
        <div className="text-2xl font-bold">VP of Client Retention - FXGZ123</div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-black dark:text-white" />
          <span>Indianapolis, IN</span>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-1 rounded-lg bg-muted p-1">
        {[
          { name: 'Applicants', count: 72, href: '/applicants' },
          { name: 'Invitations', count: 24, href: '/invitations' },
          { name: 'Completed Interviews', count: 14, href: '/completed-interviews' },
          { name: 'Reviewed', count: 7, href: '/reviewed' }
        ].map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={cn(
              "flex-1 px-3 py-2 text-sm font-medium rounded-md text-center whitespace-nowrap",
              "transition-colors duration-200",
              pathname === tab.href
                ? "bg-blue-600 text-white"
                : "hover:bg-[#0087FF] hover:text-white"
            )}
          >
            <span className="hidden sm:inline">{tab.name}</span>
            <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
            {' - '}{tab.count}
          </Link>
        ))}
      </div>

      <div className="space-y-4">
        <Input
          placeholder="Search candidates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />

        <h3 className="text-xl font-semibold text-blue-500">Invited Applicants Status</h3>

        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader className="bg-black dark:bg-[#ABABAB] rounded-t-md">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[40%] text-white dark:text-black font-semibold">
                  Applicants Name
                </TableHead>
                <TableHead className="text-center text-white dark:text-black font-semibold">
                  Cover Letter
                </TableHead>
                <TableHead className="text-center text-white dark:text-black font-semibold">
                  Resume/App
                </TableHead>
                <TableHead className="text-center text-white dark:text-black font-semibold">
                  Ai Resume/App Score
                </TableHead>
                <TableHead className="w-[15%] text-center text-white dark:text-black font-semibold">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCandidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell className="font-medium">{candidate.name}</TableCell>
                  <TableCell className="text-center">
                    {candidate.coverLetter ? (
                      <div className="flex justify-center">
                        <FileText className="h-5 w-5" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="h-5 w-5" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{candidate.score}</TableCell>
                  <TableCell className="text-center">
                    <Badge className={`${getStatusColor(candidate.status)} text-white`}>
                      {candidate.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}