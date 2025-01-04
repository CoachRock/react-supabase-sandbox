import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

interface FieldInputProps {
  label: string;
  included: boolean;
  required: boolean;
  onIncludedChange: (checked: boolean) => void;
  onRequiredChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function FieldInput({ 
  label, 
  included, 
  required, 
  onIncludedChange, 
  onRequiredChange,
  disabled = false
}: FieldInputProps) {
  return (
    <div className="flex items-start gap-4 mb-2">
      <Checkbox
        checked={included}
        onCheckedChange={onIncludedChange}
        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-2"
        disabled={disabled}
      />
      <div className="flex-1 min-w-0">
        <div className="bg-muted rounded-md px-3 py-2 text-sm break-words">
          {label}
        </div>
      </div>
      <div className="flex items-center gap-2 min-w-[120px] shrink-0">
        <Label htmlFor={`${label}-required`} className="text-sm">
          Required
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Switch
          id={`${label}-required`}
          checked={required}
          onCheckedChange={onRequiredChange}
          className="data-[state=checked]:bg-blue-500"
          disabled={disabled || !included}
        />
      </div>
    </div>
  );
}