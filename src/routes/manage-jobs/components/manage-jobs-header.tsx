import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ManageJobsHeader() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold text-blue-500">All Jobs</h2>
      <Link to="/create-job">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white dark:text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create New Job
        </Button>
      </Link>
    </div>
  );
}