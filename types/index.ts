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
  SNo: number;
  Name: string;
  Designation: string;
  Department: string;
};

export type patents = {
  SNo: number;
  Name: string;
  Title: string;
  ApplicationNum: string;

  Status: string;
};
