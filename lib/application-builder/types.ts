export interface Field {
  label: string;
  included: boolean;
  required: boolean;
}

export interface Subsection {
  title: string;
  fields: Field[];
}

export interface Section {
  title: string;
  fields?: Field[];
  subsections?: Subsection[];
  statement?: string;
}