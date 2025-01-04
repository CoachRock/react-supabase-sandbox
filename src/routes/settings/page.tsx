"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanySettings } from './components/company-settings';
import { BillingSettings } from './components/billing-settings';
import { Building2, CreditCard } from 'lucide-react';

export function Settings() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <PageHeader 
          heading="Settings" 
          description="Manage your company / organization settings" 
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="company" className="gap-2">
            <Building2 className="h-4 w-4" />
            Company / Organization
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <CompanySettings />
        </TabsContent>

        <TabsContent value="billing">
          <BillingSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}