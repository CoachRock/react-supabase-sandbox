import { Button } from '@/components/ui/button';
import { AddUserModal } from './add-user-modal';

interface SectionHeaderProps {
  title: string;
  role: 'manager' | 'assistant';
}

export function SectionHeader({ title, role }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-blue-500">{title}</h2>
      <AddUserModal role={role}>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white dark:text-white">
          Add New {role === 'manager' ? 'Hiring Manager' : 'Hiring Assistant'}
        </Button>
      </AddUserModal>
    </div>
  );
}