import { Checkbox } from '@/components/ui/checkbox';

interface SubsectionHeaderProps {
  title: string;
  onSelectAll?: (checked: boolean) => void;
  showSelectAll?: boolean;
}

export function SubsectionHeader({ title, onSelectAll, showSelectAll = false }: SubsectionHeaderProps) {
  return (
    <div className="space-y-2 mb-3">
      <h4 className="font-bold text-sm">{title}</h4>
      {showSelectAll && (
        <div className="flex items-center gap-2">
          <Checkbox
            onCheckedChange={onSelectAll}
            className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
          />
          <span className="text-sm">Select All (Add fields to application)</span>
        </div>
      )}
    </div>
  );
}