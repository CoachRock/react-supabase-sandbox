"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from 'lucide-react';

export default function ApplicationPreview() {
  const router = useRouter();
  const [approval, setApproval] = useState<string>('');
  const formData = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('applicationFields') || '[]') : [];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => router.push('/application-builder')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Application Builder
        </Button>
      </div>

      <PageHeader 
        heading="Application Preview" 
        description="Preview of the application form" 
      />
      
      <Card className="p-6">
        <div className="space-y-8">
          {formData.map((section: any, index: number) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold text-blue-500 mb-4">{section.title}</h3>
              {section.fields && (
                <div className="space-y-4">
                  {section.fields.map((field: any) => (
                    <div key={field.label}>
                      <Label className="text-sm">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input disabled className="text-sm" />
                    </div>
                  ))}
                </div>
              )}
              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((subsection: any, subIndex: number) => (
                    <div key={subsection.title}>
                      <h4 className="font-bold text-sm mb-4">{subsection.title}</h4>
                      {section.statement && (
                        <Card className="mb-4 p-4 bg-[#F3F3F3] dark:text-black">
                          <p className="text-xs">{section.statement}</p>
                        </Card>
                      )}
                      <div className="space-y-4">
                        {subsection.fields.map((field: any) => (
                          <div key={field.label}>
                            <Label className="text-sm">
                              {field.label}
                              {field.required && <span className="text-red-500 ml-1">*</span>}
                            </Label>
                            <Input disabled className="text-sm" />
                          </div>
                        ))}
                      </div>
                      {subIndex < section.subsections.length - 1 && (
                        <Separator className="my-6 dark:border-white" />
                      )}
                    </div>
                  ))}
                </div>
              )}
              {index < formData.length - 1 && <Separator className="my-6 dark:border-white" />}
            </div>
          ))}

          <Separator className="my-6 dark:border-white" />

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-500">Do you approve this application format?</h3>
            <RadioGroup value={approval} onValueChange={setApproval}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>

            <div className="flex justify-end">
              {approval === 'yes' && (
                <Button 
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() => router.push('/create-job')}
                >
                  Application Approved
                </Button>
              )}
              {approval === 'no' && (
                <Button 
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() => router.push('/application-builder')}
                >
                  Continue Editing this Application
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}