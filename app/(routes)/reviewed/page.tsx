"use client";

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/page-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, X, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Candidate {
  id: string;
  name: string;
  avatar: string;
  initials: string;
  coverLetter: boolean;
  resumeScore: string;
  interviewScore: string;
  humanScore: string;
}

const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Johnson, Robert',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'RJ',
    coverLetter: true,
    resumeScore: '94%',
    interviewScore: '94%',
    humanScore: '90%'
  },
  {
    id: '2',
    name: 'Smith, Emily',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'ES',
    coverLetter: true,
    resumeScore: '87%',
    interviewScore: '87%',
    humanScore: '80%'
  },
  {
    id: '3',
    name: 'Williams, Michael',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'MW',
    coverLetter: false,
    resumeScore: '79%',
    interviewScore: '79%',
    humanScore: '70%'
  },
  {
    id: '4',
    name: 'Brown, Sarah',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'SB',
    coverLetter: false,
    resumeScore: '64%',
    interviewScore: '64%',
    humanScore: '60%'
  }
];

export default function Reviewed() {
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
        heading="Reviewed Candidates" 
        description="Candidates who have been reviewed and await the Hiring Managers Final Thoughts" 
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

        <h3 className="text-xl font-semibold text-blue-500">Candidates Ready for the Hiring Managers Final Thoughts</h3>

        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader className="bg-black dark:bg-[#ABABAB] rounded-t-md">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[25%] text-white dark:text-black font-semibold">
                  Candidates Name
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
                <TableHead className="text-center text-white dark:text-black font-semibold">
                  Ai Interview Score
                </TableHead>
                <TableHead className="text-center text-white dark:text-black font-semibold">
                  Human Score Average
                </TableHead>
                <TableHead className="w-[15%] text-center text-white dark:text-black font-semibold">
                  Final Report
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCandidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={candidate.avatar} alt={candidate.name} />
                        <AvatarFallback>{candidate.initials}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{candidate.name}</span>
                    </div>
                  </TableCell>
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
                  <TableCell className="text-center">{candidate.resumeScore}</TableCell>
                  <TableCell className="text-center">{candidate.interviewScore}</TableCell>
                  <TableCell className="text-center">{candidate.humanScore}</TableCell>
                  <TableCell className="text-center">
                    <Link href="/final-report">
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Review / Finalize
                      </Button>
                    </Link>
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