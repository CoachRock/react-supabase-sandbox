import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { availableJobs } from '../data';

interface JobSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function JobSelector({ value, onChange }: JobSelectorProps) {
  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold text-blue-500">Select A Job</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select A Job from this List to Create An Interview" />
        </SelectTrigger>
        <SelectContent>
          {availableJobs.map((job) => (
            <SelectItem key={job.value} value={job.value}>
              {job.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}