"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { ManageJobsTable } from './components/manage-jobs-table';
import { ManageJobsHeader } from './components/manage-jobs-header';
import { ManageJobsFilters } from './components/manage-jobs-filters';
import { Card } from '@/components/ui/card';

export function ManageJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Manage Jobs" 
        description="View and manage all job postings" 
      />

      <Card className="p-6">
        <div className="space-y-6">
          <ManageJobsHeader />
          <ManageJobsFilters 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
          />
          <ManageJobsTable 
            searchQuery={searchQuery}
            statusFilter={statusFilter}
          />
        </div>
      </Card>
    </div>
  );
}