export interface Report {
  id: number;
  date:string;
  action:string;
  colonist_id: number;
  atype: string;
}

export interface NewReport {
  name: string;
  atype: string;
  date: string;
  action: string;
  colonist_id: string;
}
