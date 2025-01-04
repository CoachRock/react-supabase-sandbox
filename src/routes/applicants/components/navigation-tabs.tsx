import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Tab {
  name: string;
  count: number;
  href: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
}

export function NavigationTabs({ tabs }: NavigationTabsProps) {
  const location = useLocation();

  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-1 rounded-lg bg-muted p-1">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.href}
          className={cn(
            "flex-1 px-3 py-2 text-sm font-medium rounded-md text-center whitespace-nowrap",
            "transition-colors duration-200",
            location.pathname === tab.href
              ? "bg-blue-600 text-white"
              : "hover:bg-[#0087FF] hover:text-white"
          )}
        >
          <span className="hidden sm:inline">{tab.name}</span>
          <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
          {' - '}{tab.count}
        </Link>
      ))}
    </div>
  );
}