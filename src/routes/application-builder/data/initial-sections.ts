import { Section } from '../types';

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