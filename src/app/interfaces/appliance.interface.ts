export interface IAppliance {
  id: string;
  model: string;
  manufacturer: string;
  type: string;
  serialNumber: string;
  owner: ICustomer ;
  repair: IRepair | null;
  repairStatus: ApplianceStatus;
  repairHistory: IRepair[] | null;
  attachments: IAttachment[] | null;
}

export interface IRepair {
  id: string,
  dateStart: Date;
  dateEnd: Date | null;
  description?: string;
  cost: string;
  executor: IUser[];
  replacedParts: string[] | null;
  status: ApplianceStatus;
}

export interface IUser {
  id: string;
  name: string;
  department: string;
  assignedRepairsId: string[];
}

export interface ICustomer {
  id: string,
  name: string,
  email: string;
  phone?: string;
}


export interface IAttachment {
  name: string;
  type: string;
  url: string; // lub dane binarne, jeśli przechowywane lokalnie
}



export enum ApplianceStatus {
  NEW = 'new', // info
  ACTIVE = 'active', // success
  INACTIVE = 'inactive', // secondary outlined
  REJECTED = 'rejected', // error
  REPAIR = 'repair' // success
}
