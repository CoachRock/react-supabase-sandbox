import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FileText, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Candidate } from '../types';

interface CandidateTableProps {
  candidates: Candidate[];
}

export function CandidateTable({ candidates }: CandidateTableProps) {
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-black dark:bg-[#ABABAB] rounded-t-md">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[35%] text-white dark:text-black font-semibold">
              Candidates Name
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
            <TableHead className="text-center text-white dark:text-black font-semibold">
              Ai Interview Score
            </TableHead>
            <TableHead className="w-[15%] text-center text-white dark:text-black font-semibold">
              Review
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={candidate.avatar} alt={candidate.name} />
                    <AvatarFallback>{candidate.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{candidate.name}</span>
                </div>
              </TableCell>
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
              <TableCell className="text-center">{candidate.resumeScore}</TableCell>
              <TableCell className="text-center">{candidate.interviewScore}</TableCell>
              <TableCell className="text-center">
                <Link to="/individual-evaluation">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    Review
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}