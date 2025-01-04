"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { EditUserModal } from './components/edit-user-modal';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { UserTable } from './components/user-table';
import { SectionHeader } from './components/section-header';
import { mockManagers, mockAssistants } from './data/mock-users';
import type { User } from './types';

export function UserManager() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="User Manager" 
        description="Manage user accounts and permissions" 
      />

      <Card className="p-6">
        <div className="space-y-8">
          <SectionHeader title="Hiring Managers" role="manager" />
          <UserTable users={mockManagers} onEdit={handleEdit} />

          <Separator className="border-black dark:border-white border-2 my-8" />

          <SectionHeader title="Hiring Assistants" role="assistant" />
          <UserTable users={mockAssistants} onEdit={handleEdit} />
        </div>
      </Card>

      <EditUserModal
        user={selectedUser}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedUser(null);
        }}
      />
    </div>
  );
}