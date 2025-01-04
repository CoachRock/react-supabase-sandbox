"use client";

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/page-header';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';
import { CandidateTable } from './components/candidate-table';
import { NavigationTabs } from './components/navigation-tabs';
import { OutsideInvitationCard } from './components/outside-invitation-card';
import { mockCandidates } from './data';
import type { Candidate } from './types';

export function Applicants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(mockCandidates);

  useEffect(() => {
    const filtered = mockCandidates.filter(candidate =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCandidates(filtered);
  }, [searchQuery]);

  const toggleCandidate = (id: string) => {
    setSelectedCandidates(prev =>
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Applicants" 
        description="Applicants for the following job" 
      />

      <div className="flex flex-row justify-between items-center">
        <div className="text-2xl font-bold">VP of Client Retention - FXGZ123</div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-black dark:text-white" />
          <span>Indianapolis, IN</span>
        </div>
      </div>

      <NavigationTabs tabs={tabs} />
      <OutsideInvitationCard />

      <div className="space-y-4">
        <Input
          placeholder="Search candidates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />

        <h3 className="text-xl font-semibold text-blue-500">Alpha Interview System Applicants</h3>

        <CandidateTable 
          candidates={filteredCandidates}
          selectedCandidates={selectedCandidates}
          onToggleCandidate={toggleCandidate}
        />
      </div>
    </div>
  );
}

export default Applicants;