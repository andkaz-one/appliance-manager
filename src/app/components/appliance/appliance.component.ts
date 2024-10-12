import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ClrDatagridModule} from "@clr/angular";
import {ApplianceService} from "../../services/appliance.service";
import {AsyncPipe} from "@angular/common";
import { ApplianceStatus } from '../../interfaces/appliance.interface';

@Component({
  selector: 'app-appliance',
  standalone: true,
  imports: [
    ClrDatagridModule,
    AsyncPipe
  ],
  templateUrl: './appliance.component.html',
  styleUrl: './appliance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplianceComponent implements OnInit, OnDestroy {

  private applianceService: ApplianceService = inject(ApplianceService);

  applianceStatuses = Object.values(ApplianceStatus);

  applianceList$ = this.applianceService.appliance$
  detailGridState: any;


  ngOnInit(): void {
    console.log('Method implemented.');
  }


  getStatusClass(repairStatus: string): string {
    if (repairStatus === 'new') {
      return 'label label-info';
    } else if (repairStatus === 'active' || repairStatus === 'repair') {
      return 'label label-success';
    } else if (repairStatus === 'rejected') {
      return 'label label-danger';
    } else {
      return 'label';
    }
  }


  ngOnDestroy(): void {
    console.log('Method destroyed.');
  }

}
