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
  // ... rest of the sections from the original file
];