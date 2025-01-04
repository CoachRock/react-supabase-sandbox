import { Section } from './types';

export const initialSections: Section[] = [
  {
    title: "Applicant's Contact Information",
    fields: [
      { label: "First Name", included: false, required: false },
      { label: "Middle Name", included: false, required: false },
      { label: "Last Name", included: false, required: false },
      { label: "Mailing Address", included: false, required: false },
      { label: "City", included: false, required: false },
      { label: "State", included: false, required: false },
      { label: "Zip Code", included: false, required: false },
      { label: "Home Phone", included: false, required: false },
      { label: "Cell Phone", included: false, required: false },
      { label: "E-Mail Address", included: false, required: false }
    ]
  },
  {
    title: "Education Information",
    subsections: [
      {
        title: "High School",
        fields: [
          { label: "High School Name", included: false, required: false },
          { label: "City", included: false, required: false },
          { label: "State", included: false, required: false },
          { label: "Attended From", included: false, required: false },
          { label: "Attended To", included: false, required: false },
          { label: "Did you graduate?", included: false, required: false },
          { label: "Diploma Type", included: false, required: false }
        ]
      },
      {
        title: "College",
        fields: [
          { label: "College Name", included: false, required: false },
          { label: "City", included: false, required: false },
          { label: "State", included: false, required: false },
          { label: "Attended From", included: false, required: false },
          { label: "Attended To", included: false, required: false },
          { label: "Did you graduate?", included: false, required: false },
          { label: "Degree Type", included: false, required: false }
        ]
      },
      {
        title: "Other / Trade School",
        fields: [
          { label: "School Name", included: false, required: false },
          { label: "City", included: false, required: false },
          { label: "State", included: false, required: false },
          { label: "Attended From", included: false, required: false },
          { label: "Attended To", included: false, required: false },
          { label: "Did you graduate?", included: false, required: false },
          { label: "Diploma Type", included: false, required: false }
        ]
      }
    ]
  },
  {
    title: "Work Experience",
    subsections: [
      {
        title: "Current Employer",
        fields: [
          { label: "Company Name", included: false, required: false },
          { label: "Phone", included: false, required: false },
          { label: "Mailing Address", included: false, required: false },
          { label: "City", included: false, required: false },
          { label: "State", included: false, required: false },
          { label: "Zip Code", included: false, required: false },
          { label: "Position Held", included: false, required: false },
          { label: "From Date", included: false, required: false },
          { label: "To Date", included: false, required: false },
          { label: "Job Responsibilities", included: false, required: false },
          { label: "Supervisor's Name", included: false, required: false },
          { label: "Reason for Leaving?", included: false, required: false },
          { label: "Ending Pay", included: false, required: false },
          { label: "May we contact this former employer?", included: false, required: false }
        ]
      },
      {
        title: "Previous Employer 1",
        fields: [
          { label: "Company Name", included: false, required: false },
          { label: "Phone", included: false, required: false },
          { label: "Mailing Address", included: false, required: false },
          { label: "City", included: false, required: false },
          { label: "State", included: false, required: false },
          { label: "Zip Code", included: false, required: false },
          { label: "Position Held", included: false, required: false },
          { label: "From Date", included: false, required: false },
          { label: "To Date", included: false, required: false },
          { label: "Job Responsibilities", included: false, required: false },
          { label: "Supervisor's Name", included: false, required: false },
          { label: "Reason for Leaving?", included: false, required: false },
          { label: "Ending Pay", included: false, required: false },
          { label: "May we contact this former employer?", included: false, required: false }
        ]
      },
      {
        title: "Previous Employer 2",
        fields: [
          { label: "Company Name", included: false, required: false },
          { label: "Phone", included: false, required: false },
          { label: "Mailing Address", included: false, required: false },
          { label: "City", included: false, required: false },
          { label: "State", included: false, required: false },
          { label: "Zip Code", included: false, required: false },
          { label: "Position Held", included: false, required: false },
          { label: "From Date", included: false, required: false },
          { label: "To Date", included: false, required: false },
          { label: "Job Responsibilities", included: false, required: false },
          { label: "Supervisor's Name", included: false, required: false },
          { label: "Reason for Leaving?", included: false, required: false },
          { label: "Ending Pay", included: false, required: false },
          { label: "May we contact this former employer?", included: false, required: false }
        ]
      },
      {
        title: "Previous Employer 3",
        fields: [
          { label: "Company Name", included: false, required: false },
          { label: "Phone", included: false, required: false },
          { label: "Mailing Address", included: false, required: false },
          { label: "City", included: false, required: false },
          { label: "State", included: false, required: false },
          { label: "Zip Code", included: false, required: false },
          { label: "Position Held", included: false, required: false },
          { label: "From Date", included: false, required: false },
          { label: "To Date", included: false, required: false },
          { label: "Job Responsibilities", included: false, required: false },
          { label: "Supervisor's Name", included: false, required: false },
          { label: "Reason for Leaving?", included: false, required: false },
          { label: "Ending Pay", included: false, required: false },
          { label: "May we contact this former employer?", included: false, required: false }
        ]
      }
    ]
  },
  {
    title: "Military Experience",
    fields: [
      { label: "Have you served in the U.S. Military?", included: false, required: false },
      { label: "Branch", included: false, required: false },
      { label: "From Date", included: false, required: false },
      { label: "To Date", included: false, required: false },
      { label: "Job Responsibilities", included: false, required: false },
      { label: "Reason for Leaving?", included: false, required: false }
    ]
  },
  {
    title: "Criminal History",
    fields: [
      { label: "Have you ever been convicted of a criminal offense?", included: false, required: false },
      { label: "Do you currently have any criminal actions pending in which you are the defendant?", included: false, required: false },
      { label: "Are you currently on probation or parole?", included: false, required: false },
      { label: "If you answered \"Yes\" to any of the above, please explain in detail here.", included: false, required: false }
    ]
  },
  {
    title: "References",
    subsections: [
      {
        title: "Reference 1",
        fields: [
          { label: "Company Name", included: false, required: false },
          { label: "Relationship", included: false, required: false },
          { label: "First Name", included: false, required: false },
          { label: "Last Name", included: false, required: false },
          { label: "Phone", included: false, required: false },
          { label: "E-Mail Address", included: false, required: false }
        ]
      },
      {
        title: "Reference 2",
        fields: [
          { label: "Company Name", included: false, required: false },
          { label: "Relationship", included: false, required: false },
          { label: "First Name", included: false, required: false },
          { label: "Last Name", included: false, required: false },
          { label: "Phone", included: false, required: false },
          { label: "E-Mail Address", included: false, required: false }
        ]
      },
      {
        title: "Reference 3",
        fields: [
          { label: "Company Name", included: false, required: false },
          { label: "Relationship", included: false, required: false },
          { label: "First Name", included: false, required: false },
          { label: "Last Name", included: false, required: false },
          { label: "Phone", included: false, required: false },
          { label: "E-Mail Address", included: false, required: false }
        ]
      }
    ]
  },
  {
    title: "Applicant Statement",
    statement: "I certify that this employment application was completed by me and that all of the information on this application is true and correct to the best of my knowledge. I understand that any falsification, misrepresentation, or omission of facts called for herein will result in disqualification from further consideration or dismissal from employment if I am hired. I authorize verification of my criminal history information and acknowledge that I understand the terms of this agreement. I understand that this application is not valid without my digital signature and date below.",
    fields: [
      { label: "Digital Signature", included: true, required: true },
      { label: "Date", included: true, required: true }
    ]
  }
];