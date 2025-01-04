interface PageHeaderProps {
  heading: string;
  description?: string | React.ReactNode;
}

export function PageHeader({ heading, description }: PageHeaderProps) {
  return (
    <div className="space-y-1.5">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{heading}</h1>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}