import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Candidate } from '../types';

interface CandidateTableProps {
  candidates: Candidate[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-yellow-500 hover:bg-yellow-600';
    case 'Delivered':
      return 'bg-green-500 hover:bg-green-600';
    case 'Expired':
      return 'bg-red-500 hover:bg-red-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};

export function CandidateTable({ candidates }: CandidateTableProps) {
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-black dark:bg-[#ABABAB] rounded-t-md">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40%] text-white dark:text-black font-semibold">
              Applicants Name
            </TableHead>
            <TableHead className="text-center text-white dark:text-black font-semibold">
              Cover Letter
            </TableHead>
            <TableHead className="text-center text-white dark:text-black font-semibold">
              Resume/App
            </TableHead>
            <TableHead className="text-center text-white dark:text-black font-semibold">
              Ai Resume/App Score
            </TableHead>
            <TableHead className="w-[15%] text-center text-white dark:text-black font-semibold">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell className="font-medium">{candidate.name}</TableCell>
              <TableCell className="text-center">
                {candidate.coverLetter ? (
                  <div className="flex justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <X className="h-5 w-5" />
                  </div>
                )}
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <FileText className="h-5 w-5" />
                </div>
              </TableCell>
              <TableCell className="text-center">{candidate.score}</TableCell>
              <TableCell className="text-center">
                <Badge className={`${getStatusColor(candidate.status)} text-white`}>
                  {candidate.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}