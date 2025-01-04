import { Card } from '@/components/ui/card';

interface ScoreSummaryProps {
  scores: {
    resume: number;
    interview: number;
    human: number;
  };
}

export function ScoreSummary({ scores }: ScoreSummaryProps) {
  return (
    <div className="flex justify-between mb-8">
      <Card className="p-4 text-center w-[200px] h-[200px] flex flex-col items-center justify-center">
        <h3 className="text-sm font-medium mb-2 text-blue-500">AI Resume Score</h3>
        <div className="text-4xl font-bold">{scores.resume}%</div>
      </Card>
      <Card className="p-4 text-center w-[200px] h-[200px] flex flex-col items-center justify-center">
        <h3 className="text-sm font-medium mb-2 text-blue-500">AI Interview Score</h3>
        <div className="text-4xl font-bold">{scores.interview}%</div>
      </Card>
      <Card className="p-4 text-center w-[200px] h-[200px] flex flex-col items-center justify-center">
        <h3 className="text-sm font-medium mb-2 text-blue-500">Human Score Average</h3>
        <div className="text-4xl font-bold">{scores.human}%</div>
      </Card>
    </div>
  );
}