"use client";

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/page-header';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';
import { CandidateTable } from './components/candidate-table';
import { NavigationTabs } from './components/navigation-tabs';
import { mockCandidates } from './data';
import type { Candidate } from './types';

const tabs = [
  { name: 'Applicants', count: 72, href: '/applicants' },
  { name: 'Invitations', count: 24, href: '/invitations' },
  { name: 'Completed Interviews', count: 14, href: '/completed-interviews' },
  { name: 'Reviewed', count: 7, href: '/reviewed' }
];

export function Invitations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(mockCandidates);

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

      <NavigationTabs tabs={tabs} />

      <div className="space-y-4">
        <Input
          placeholder="Search candidates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />

        <h3 className="text-xl font-semibold text-blue-500">Invited Applicants Status</h3>

        <CandidateTable candidates={filteredCandidates} />
      </div>
    </div>
  );
}