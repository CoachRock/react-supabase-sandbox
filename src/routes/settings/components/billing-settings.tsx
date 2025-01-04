import { Card } from '@/components/ui/card';

export function BillingSettings() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Billing Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing information.
        </p>
      </div>
    </Card>
  );
}