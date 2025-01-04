export interface ArchivedJob {
  title: string;
  id: string;
  location: { city: string; state: string; };
  tabs: { applicants: number; invitations: number; completed: number; reviewed: number; };
  hiringManager: string;
  posted: string;
  finalThoughts: {
    candidateName: string;
    feedback: string;
    position: string;
  };
}

export const mockArchivedJobs: ArchivedJob[] = [
  {
    title: "Barista - Shift Manager",
    id: "FKLS345",
    location: { city: "Indianapolis", state: "IN" },
    tabs: { applicants: 72, invitations: 24, completed: 14, reviewed: 7 },
    hiringManager: "Michael Johnson",
    posted: "11/22/24 - 11:14AM",
    finalThoughts: {
      candidateName: "Sandra Hanson",
      feedback: "demonstrated strong customer service skills and extensive coffee preparation knowledge. Their previous barista and shift management experience highlights their ability to handle high-pressure situations and lead a team. While they need to improve inventory management skills, they expressed a strong willingness to learn. Based on their experience and enthusiasm, we have decided to hire",
      position: "Barista - Shift Manager"
    }
  },
  {
    title: "Senior Software Developer",
    id: "JKRS789",
    location: { city: "Boston", state: "MA" },
    tabs: { applicants: 156, invitations: 45, completed: 28, reviewed: 12 },
    hiringManager: "Emily Chen",
    posted: "11/20/24 - 09:30AM",
    finalThoughts: {
      candidateName: "David Miller",
      feedback: "showcased exceptional technical expertise and leadership qualities. Their problem-solving approach and system architecture knowledge impressed the entire panel. While communication skills could be enhanced, their technical prowess and team collaboration experience make them an excellent fit. We have decided to hire",
      position: "Senior Software Developer"
    }
  },
  {
    title: "Marketing Director",
    id: "PQRS123",
    location: { city: "Chicago", state: "IL" },
    tabs: { applicants: 98, invitations: 32, completed: 18, reviewed: 8 },
    hiringManager: "Sarah Anderson",
    posted: "11/18/24 - 02:45PM",
    finalThoughts: {
      candidateName: "Jennifer Wilson",
      feedback: "brought innovative marketing strategies and a proven track record of successful campaigns. Their leadership style and vision for our brand's future aligned perfectly with our company goals. We have decided to hire",
      position: "Marketing Director"
    }
  },
  {
    title: "HR Coordinator",
    id: "MNOP456",
    location: { city: "Seattle", state: "WA" },
    tabs: { applicants: 84, invitations: 28, completed: 16, reviewed: 6 },
    hiringManager: "Robert Wilson",
    posted: "11/15/24 - 10:15AM",
    finalThoughts: {
      candidateName: "Michael Thompson",
      feedback: "demonstrated excellent organizational skills and a deep understanding of HR processes. Their experience with employee relations and benefits administration made them stand out. We have decided to hire",
      position: "HR Coordinator"
    }
  },
  {
    title: "Product Manager",
    id: "WXYZ789",
    location: { city: "San Francisco", state: "CA" },
    tabs: { applicants: 145, invitations: 42, completed: 24, reviewed: 10 },
    hiringManager: "Emily Chen",
    posted: "11/12/24 - 03:30PM",
    finalThoughts: {
      candidateName: "Alex Rodriguez",
      feedback: "showed exceptional product vision and strategic thinking. Their track record of successful product launches and ability to work cross-functionally impressed the team. We have decided to hire",
      position: "Product Manager"
    }
  },
  {
    title: "Sales Representative",
    id: "ABCD234",
    location: { city: "Miami", state: "FL" },
    tabs: { applicants: 92, invitations: 30, completed: 15, reviewed: 5 },
    hiringManager: "Robert Wilson",
    posted: "11/10/24 - 01:45PM",
    finalThoughts: {
      candidateName: "Rachel Martinez",
      feedback: "demonstrated outstanding sales acumen and relationship-building skills. Their energy and proven track record in exceeding sales targets made them an ideal candidate. We have decided to hire",
      position: "Sales Representative"
    }
  },
  {
    title: "UX Designer",
    id: "EFGH567",
    location: { city: "Austin", state: "TX" },
    tabs: { applicants: 118, invitations: 35, completed: 20, reviewed: 8 },
    hiringManager: "Sarah Anderson",
    posted: "11/08/24 - 11:20AM",
    finalThoughts: {
      candidateName: "Chris Parker",
      feedback: "showcased an impressive portfolio and deep understanding of user-centered design principles. Their ability to balance aesthetics with functionality stood out. We have decided to hire",
      position: "UX Designer"
    }
  },
  {
    title: "Data Analyst",
    id: "IJKL890",
    location: { city: "Denver", state: "CO" },
    tabs: { applicants: 105, invitations: 32, completed: 18, reviewed: 7 },
    hiringManager: "Michael Johnson",
    posted: "11/05/24 - 09:45AM",
    finalThoughts: {
      candidateName: "Sarah Kim",
      feedback: "displayed strong analytical skills and proficiency with data visualization tools. Their ability to derive meaningful insights from complex datasets impressed the team. We have decided to hire",
      position: "Data Analyst"
    }
  },
  {
    title: "Content Writer",
    id: "MNOP123",
    location: { city: "Portland", state: "OR" },
    tabs: { applicants: 78, invitations: 25, completed: 12, reviewed: 4 },
    hiringManager: "Emily Chen",
    posted: "11/03/24 - 02:15PM",
    finalThoughts: {
      candidateName: "James Wilson",
      feedback: "showed excellent writing skills and creativity in their portfolio. Their understanding of SEO best practices and ability to adapt tone for different audiences was impressive. We have decided to hire",
      position: "Content Writer"
    }
  },
  {
    title: "IT Support Specialist",
    id: "QRST456",
    location: { city: "Atlanta", state: "GA" },
    tabs: { applicants: 95, invitations: 28, completed: 14, reviewed: 5 },
    hiringManager: "Robert Wilson",
    posted: "11/01/24 - 10:30AM",
    finalThoughts: {
      candidateName: "David Chen",
      feedback: "demonstrated strong technical knowledge and excellent customer service skills. Their problem-solving abilities and patience in explaining complex issues made them stand out. We have decided to hire",
      position: "IT Support Specialist"
    }
  },
  {
    title: "Financial Analyst",
    id: "UVWX789",
    location: { city: "Houston", state: "TX" },
    tabs: { applicants: 112, invitations: 34, completed: 19, reviewed: 8 },
    hiringManager: "Sarah Anderson",
    posted: "10/30/24 - 04:15PM",
    finalThoughts: {
      candidateName: "Michael Brown",
      feedback: "showed strong financial modeling skills and deep understanding of market analysis. Their attention to detail and strategic thinking impressed the team. We have decided to hire",
      position: "Financial Analyst"
    }
  },
  {
    title: "Operations Manager",
    id: "YZAB123",
    location: { city: "Phoenix", state: "AZ" },
    tabs: { applicants: 88, invitations: 27, completed: 15, reviewed: 6 },
    hiringManager: "Michael Johnson",
    posted: "10/28/24 - 01:30PM",
    finalThoughts: {
      candidateName: "Lisa Thompson",
      feedback: "demonstrated excellent leadership skills and operational expertise. Their experience in process optimization and team management aligned perfectly with our needs. We have decided to hire",
      position: "Operations Manager"
    }
  },
  {
    title: "Quality Assurance Engineer",
    id: "CDEF456",
    location: { city: "Raleigh", state: "NC" },
    tabs: { applicants: 102, invitations: 31, completed: 17, reviewed: 7 },
    hiringManager: "Emily Chen",
    posted: "10/25/24 - 11:45AM",
    finalThoughts: {
      candidateName: "Robert Lee",
      feedback: "showed strong attention to detail and excellent testing methodologies. Their experience with automated testing frameworks and quality processes made them an ideal candidate. We have decided to hire",
      position: "Quality Assurance Engineer"
    }
  },
  {
    title: "Customer Success Manager",
    id: "GHIJ789",
    location: { city: "Nashville", state: "TN" },
    tabs: { applicants: 85, invitations: 26, completed: 13, reviewed: 5 },
    hiringManager: "Robert Wilson",
    posted: "10/23/24 - 09:15AM",
    finalThoughts: {
      candidateName: "Emma Davis",
      feedback: "demonstrated exceptional customer relationship management skills and strategic thinking. Their proactive approach to customer success and experience in similar roles stood out. We have decided to hire",
      position: "Customer Success Manager"
    }
  },
  {
    title: "Graphic Designer",
    id: "KLMN012",
    location: { city: "Las Vegas", state: "NV" },
    tabs: { applicants: 94, invitations: 29, completed: 16, reviewed: 6 },
    hiringManager: "Sarah Anderson",
    posted: "10/20/24 - 03:45PM",
    finalThoughts: {
      candidateName: "Tyler Wilson",
      feedback: "showcased an impressive portfolio with diverse design skills. Their creativity and ability to translate brand guidelines into compelling visuals impressed the team. We have decided to hire",
      position: "Graphic Designer"
    }
  }
];