import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, X } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import type { Candidate } from '../types';

interface CandidateTableProps {
  candidates: Candidate[];
  selectedCandidates: string[];
  onToggleCandidate: (id: string) => void;
}

export function CandidateTable({ candidates, selectedCandidates, onToggleCandidate }: CandidateTableProps) {
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
              AI Resume/App Score
            </TableHead>
            <TableHead className="w-[10%] text-center text-white dark:text-black font-semibold">
              Invitation
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
                <div className="flex justify-center">
                  <Checkbox
                    checked={selectedCandidates.includes(candidate.id)}
                    onCheckedChange={() => onToggleCandidate(candidate.id)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}