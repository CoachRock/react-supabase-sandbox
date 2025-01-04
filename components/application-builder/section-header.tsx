"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface SectionHeaderProps {
  title: string;
  onSelectAll?: (checked: boolean) => void;
  showSelectAll?: boolean;
}

export function SectionHeader({ title, onSelectAll, showSelectAll = false }: SectionHeaderProps) {
  return (
    <div className="space-y-2 mb-3">
      <h3 className="text-2xl font-semibold text-blue-500">{title}</h3>
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