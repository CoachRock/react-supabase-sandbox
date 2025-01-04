import { Card } from '@/components/ui/card';

export function CompanySettings() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Company Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure your company / organization profile and preferences.
        </p>
      </div>
    </Card>
  );
}