export type FundedProjects = {
  SNo: number;
  ProjectName: string;
  Investigator: string;
  FundingAgency: string;
  Department: string;
  Award: string;
  Funds: number;
  Duration: string;
};
export type phd_supervisor = {
  SNo?: number;
  name: string;
  designation: string;
  department: string;
};

export type patents = {
  SNo: number;
  Name: string;
  Patent_title: string;
  ApplicationNum: string;
  Status: string;
};

export type Publication = {
  Sno: number;
  Name_of_journal: string;
  Title_of_journal: string;
  Author: string;
  Vol_no: number;
  Iss_No: number;
  pg_No: number;
  Year: string;
  DOI: string;
  Department: string;
};

export type Collab_MOU = {
  Sno: number;
  Name_of_collaborator: string;
  Address_of_collaborator: string;
  Brief_description_of_collaboration: string;
  Date_of_mou: string;
};

export type Conferences = {
  Sno: number;
  Name_of_conference: string;
  Date: string;
  href?: string;
};
