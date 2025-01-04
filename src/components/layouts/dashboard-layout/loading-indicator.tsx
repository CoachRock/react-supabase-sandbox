"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";

export function LoadingIndicator() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50">
      <Spinner className="text-blue-500" />
    </div>
  );
}