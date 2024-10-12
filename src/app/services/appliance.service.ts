import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IAppliance, ApplianceStatus} from "../interfaces/appliance.interface";


@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  appliance$ = new BehaviorSubject<IAppliance[]>([
    {
      id: '1',
      model: 'IPhone 15',
      manufacturer: 'Apple',
      type: 'cell-phone',
      serialNumber: '90982008546',
      owner: {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@i.com',
        phone: '500300499',
      },
      repair: null,
      repairStatus: ApplianceStatus.NEW,
      attachments: null,
      repairHistory: null,
    },
    {
      id: '2',
      model: 'A400',
      manufacturer: 'Lenovo',
      type: 'laptop',
      serialNumber: 'GKW189909',
      owner: {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@i.com',
        phone: '500300499',
      },
      repair: {
        id: '1',
        status: ApplianceStatus.REPAIR,
        dateStart: new Date(),
        cost: '360,65',
        dateEnd: null,
        description: '',
        replacedParts: null,
        executor: [
          {
            id: '1',
            name: 'Mario',
            department: 'Warsaw',
            assignedRepairsId: ['1']
          }
        ],
      },
      repairStatus: ApplianceStatus.REPAIR,
      attachments: null,
      repairHistory: null,
    }
  ])

  constructor() { }
}
