"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { Building2, CreditCard } from 'lucide-react';

export default function Settings() {
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
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company Settings</h3>
              <p className="text-sm text-muted-foreground">
                Configure your company / organization profile and preferences.
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Billing Settings</h3>
              <p className="text-sm text-muted-foreground">
                Manage your subscription and billing information.
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}