"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

interface Field {
  label: string;
  included: boolean;
  required: boolean;
}

interface Subsection {
  title: string;
  fields: Field[];
}

interface Section {
  title: string;
  fields?: Field[];
  subsections?: Subsection[];
  statement?: string;
}

interface PreviewApplicationModalProps {
  children: React.ReactNode;
  formData: Section[];
}

export function PreviewApplicationModal({ children, formData }: PreviewApplicationModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Application Preview</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            {formData.map((section, index) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-blue-500 mb-4">{section.title}</h3>
                {section.fields && (
                  <div className="space-y-4">
                    {section.fields.map((field) => (
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
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subsection.title}>
                        <h4 className="font-bold text-sm mb-4">{subsection.title}</h4>
                        {section.statement && (
                          <Card className="mb-4 p-4 bg-[#F3F3F3] dark:text-black">
                            <p className="text-xs">{section.statement}</p>
                          </Card>
                        )}
                        <div className="space-y-4">
                          {subsection.fields.map((field) => (
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
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}