"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { JobAIModal } from '@/components/modals/job-ai-modal';
import { PreviewJobModal } from '@/components/modals/preview-job-modal';
import { Link, useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function CreateJob() {
  const [readyToPost, setReadyToPost] = useState(false);
  const [applicationType, setApplicationType] = useState('');
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Create A Job" 
        description="Create a new job posting" 
      />

      <Card className="p-6">
        <form className="space-y-8">
          {/* Job Details Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-500">Job Details</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="Job Title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobDepartment">Job Department</Label>
                <Input id="jobDepartment" placeholder="Job Department" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobCity">Job City</Label>
                <Input id="jobCity" placeholder="Job City" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobState">Job State</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in">Indiana</SelectItem>
                    <SelectItem value="il">Illinois</SelectItem>
                    <SelectItem value="oh">Ohio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paySalary">Pay / Salary</Label>
                <Input id="paySalary" placeholder="Pay / Salary" />
              </div>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-500">Job Description</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="jobSummary">Job Summary</Label>
                  <JobAIModal 
                    title="AI Job Summary Assistant"
                    description="Let AI help you write a compelling job summary"
                  />
                </div>
                <Textarea 
                  id="jobSummary" 
                  placeholder="Brief overview of this position"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="keyResponsibilities">Key Job Responsibilities</Label>
                  <JobAIModal 
                    title="AI Job Responsibilities Assistant"
                    description="Let AI help you list key job responsibilities"
                  />
                </div>
                <Textarea 
                  id="keyResponsibilities" 
                  placeholder="List the main duties and responsibilities"
                  className="min-h-[150px]"
                />
              </div>
            </div>
          </div>

          {/* Application Type Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-500">Application Type</h2>
            <div className="space-y-4">
              <RadioGroup 
                value={applicationType}
                onValueChange={setApplicationType}
              >
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="snapshot" id="snapshot" />
                    <div className="space-y-1">
                      <Label htmlFor="snapshot" className="font-medium">Snapshot Application</Label>
                      <p className="text-sm text-muted-foreground">
                        Use our application builder to collect the information you need.
                      </p>
                    </div>
                  </div>
                  {applicationType === 'snapshot' && (
                    <div className="pl-7">
                      <Link to="/application-builder">
                        <Button 
                          variant="outline"
                          className="bg-[#B4B4B4] text-black hover:bg-blue-500 hover:text-white transition-colors"
                        >
                          Application Builder
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="professional" id="professional" />
                  <div className="space-y-1">
                    <Label htmlFor="professional" className="font-medium">Professional Application</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow candidates to submit their contact information, cover letter, and resume.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="readyToPost" 
                checked={readyToPost}
                onCheckedChange={(checked) => setReadyToPost(checked as boolean)}
              />
              <Label htmlFor="readyToPost">
                I have reviewed the job post and application process and I would like to make this post live
              </Label>
            </div>
            <div className="flex justify-end space-x-4">
              <PreviewJobModal>
                <Button variant="outline">Preview Job Post</Button>
              </PreviewJobModal>
              <Button 
                disabled={!readyToPost}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Post Job Live
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}