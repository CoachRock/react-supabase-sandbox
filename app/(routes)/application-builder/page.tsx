"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SectionHeader } from '@/components/application-builder/section-header';
import { SubsectionHeader } from '@/components/application-builder/subsection-header';
import { FieldInput } from '@/components/application-builder/field-input';
import { initialSections } from '@/lib/application-builder/initial-data';
import { Section, Field } from '@/lib/application-builder/types';

export default function ApplicationBuilder() {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>(initialSections);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFieldChange = (
    sectionIndex: number,
    fieldIndex: number,
    subsectionIndex?: number,
    type: 'included' | 'required',
    value: boolean
  ) => {
    setSections(prevSections => {
      const newSections = [...prevSections];
      const section = { ...newSections[sectionIndex] };

      if (subsectionIndex !== undefined && section.subsections) {
        const subsection = { ...section.subsections[subsectionIndex] };
        const field = { ...subsection.fields[fieldIndex] };
        field[type] = value;
        if (type === 'included' && !value) {
          field.required = false;
        }
        subsection.fields[fieldIndex] = field;
        section.subsections[subsectionIndex] = subsection;
      } else if (section.fields) {
        const field = { ...section.fields[fieldIndex] };
        field[type] = value;
        if (type === 'included' && !value) {
          field.required = false;
        }
        section.fields[fieldIndex] = field;
      }

      newSections[sectionIndex] = section;
      return newSections;
    });
  };

  const handleSelectAll = (sectionIndex: number, subsectionIndex?: number, checked: boolean) => {
    setSections(prevSections => {
      const newSections = [...prevSections];
      const section = { ...newSections[sectionIndex] };

      if (subsectionIndex !== undefined && section.subsections) {
        const subsection = { ...section.subsections[subsectionIndex] };
        subsection.fields = subsection.fields.map(field => ({
          ...field,
          included: checked,
          required: field.required && checked
        }));
        section.subsections[subsectionIndex] = subsection;
      } else if (section.fields) {
        section.fields = section.fields.map(field => ({
          ...field,
          included: checked,
          required: field.required && checked
        }));
      }

      newSections[sectionIndex] = section;
      return newSections;
    });
  };

  const getIncludedFields = () => {
    return sections.map(section => ({
      title: section.title,
      statement: section.statement,
      fields: section.fields?.filter(f => f.included),
      subsections: section.subsections?.map(sub => ({
        title: sub.title,
        fields: sub.fields.filter(f => f.included)
      })).filter(sub => sub.fields.length > 0)
    })).filter(section => 
      (section.fields && section.fields.length > 0) || 
      (section.subsections && section.subsections.length > 0)
    );
  };

  const handlePreviewClick = () => {
    const includedFields = getIncludedFields();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('applicationFields', JSON.stringify(includedFields));
      router.push('/application-preview');
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Application Builder" 
        description="Create a custom application form for your job posting" 
      />
      
      <Card className="p-6">
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <div key={section.title}>
              <SectionHeader 
                title={section.title}
                onSelectAll={
                  section.title !== "Applicant Statement" 
                    ? (checked) => handleSelectAll(sectionIndex, undefined, checked)
                    : undefined
                }
                showSelectAll={section.title !== "Applicant Statement" && !section.subsections}
              />

              {section.statement && (
                <Card className="mb-4 p-4 bg-[#F3F3F3] dark:text-black">
                  <p className="text-xs">{section.statement}</p>
                </Card>
              )}

              {section.fields && (
                <div className="space-y-2">
                  {section.fields.map((field, fieldIndex) => (
                    <FieldInput
                      key={field.label}
                      label={field.label}
                      included={field.included}
                      required={field.required}
                      onIncludedChange={(checked) => 
                        handleFieldChange(sectionIndex, fieldIndex, undefined, 'included', checked)
                      }
                      onRequiredChange={(checked) =>
                        handleFieldChange(sectionIndex, fieldIndex, undefined, 'required', checked)
                      }
                      disabled={section.title === "Applicant Statement"}
                    />
                  ))}
                </div>
              )}

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((subsection, subsectionIndex) => (
                    <div key={subsection.title}>
                      <SubsectionHeader
                        title={subsection.title}
                        onSelectAll={(checked) => 
                          handleSelectAll(sectionIndex, subsectionIndex, checked)
                        }
                        showSelectAll={true}
                      />
                      <div className="space-y-2">
                        {subsection.fields.map((field, fieldIndex) => (
                          <FieldInput
                            key={field.label}
                            label={field.label}
                            included={field.included}
                            required={field.required}
                            onIncludedChange={(checked) =>
                              handleFieldChange(sectionIndex, fieldIndex, subsectionIndex, 'included', checked)
                            }
                            onRequiredChange={(checked) =>
                              handleFieldChange(sectionIndex, fieldIndex, subsectionIndex, 'required', checked)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {sectionIndex < sections.length - 1 && (
                <Separator className="my-6 border-black dark:border-white border-2" />
              )}
            </div>
          ))}

          <div className="flex justify-end space-x-4">
            <Button 
              variant="outline"
              className="bg-[#B4B4B4] text-black hover:bg-blue-500 hover:text-white transition-colors"
              onClick={handlePreviewClick}
            >
              Preview Application
            </Button>
            <Button 
              className="bg-blue-500 hover:bg-blue-600"
              disabled={!isFormValid}
            >
              Build this Application
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}