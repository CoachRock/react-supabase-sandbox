"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { SearchBar } from './components/search-bar';
import { FAQList } from './components/faq-list';
import { SupportTabs } from './components/support-tabs';
import { SupportRequestForm } from './components/support-request-form';
import { Card } from '@/components/ui/card';

export function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState("faqs");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Support" 
        description="Get help and support" 
      />

      <Card className="p-6">
        <SupportTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onDialogChange={setIsDialogOpen}
        />

        {activeTab === "faqs" && (
          <>
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery} 
            />
            <FAQList searchQuery={searchQuery} />
          </>
        )}

        <SupportRequestForm 
          isOpen={isDialogOpen} 
          onOpenChange={setIsDialogOpen} 
          onSubmit={() => {
            setIsDialogOpen(false);
            setActiveTab("faqs");
          }}
        />
      </Card>
    </div>
  );
}