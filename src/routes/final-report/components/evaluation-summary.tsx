import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

const evaluators = [
  {
    name: "James Johnson",
    role: "Hiring Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    feedback: "Et voluptate eu magna amet et clium enim fugiat anim sit aute. Culpa velit mollit voluptate exercitation dolor exercitation voluptate deserunt voluptate dolor labore deserunt est labore. Sit aliqua in sint reprehenderit consectetur ut elit non culpa clium ipsum. Commodo dolore ut mollit consectetur mollit ut quis aliqua velit et euismod utrisma magna nulla excepteur mollit ut.",
    score: 94
  },
  // ... other evaluators
];

interface EvaluationSummaryProps {
  finalThoughts: string;
  onFinalThoughtsChange: (value: string) => void;
}

export function EvaluationSummary({ finalThoughts, onFinalThoughtsChange }: EvaluationSummaryProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-blue-500">Evaluation Summary</h3>
      
      {evaluators.map((evaluator, index) => (
        <div key={index} className="border-b-2 border-black pb-6 last:border-b-0">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={evaluator.avatar} alt={evaluator.name} />
              <AvatarFallback>{evaluator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-bold">{evaluator.name}</h4>
              <p className="text-sm text-muted-foreground">{evaluator.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Human Score:</span>
              <span className="text-xl font-bold">{evaluator.score}%</span>
            </div>
          </div>
          <div className="pl-16 space-y-4">
            <p className="text-muted-foreground">{evaluator.feedback}</p>
            <div className="flex justify-end">
              <Button className="bg-blue-500 hover:bg-blue-600">
                <span className="text-white">
                  See {evaluator.name}'s evaluation
                </span>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Separator className="my-6 border-black dark:border-white" />

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-500">Hiring Group - Final Thoughts</h3>
        <Textarea
          placeholder="Enter the overall evaluation feedback"
          className="min-h-[150px]"
          value={finalThoughts}
          onChange={(e) => onFinalThoughtsChange(e.target.value)}
        />
        <div className="flex justify-end">
          <Button 
            className="bg-blue-500 hover:bg-blue-600 text-white"
            disabled={!finalThoughts.trim()}
          >
            Finalize Evaluation
          </Button>
        </div>
      </div>
    </div>
  );
}