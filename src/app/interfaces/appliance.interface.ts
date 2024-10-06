interface IAppliance {
  id: string;
  model: string;
  manufacturer: string;
  serialNumber: string;
  owner: {
    name: string;
    email: string;
  };
  repairDate: Date;
  assignedEmployee: {
    name: string;
    department: string;
  };
  repairHistory: IRepair[];
  attachments: IAttachment[];
  status: ApplianceStatus;
}

interface IRepair {
  date: Date;
  description: string;
  cost: number;
  executor: string;
  replacedParts: string[];
}

interface IAttachment {
  name: string;
  type: string;
  url: string; // lub dane binarne, jeśli przechowywane lokalnie
}

enum ApplianceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  REPAIR = 'repair'
}
