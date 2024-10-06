import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-appliance',
  standalone: true,
  imports: [],
  templateUrl: './appliance.component.html',
  styleUrl: './appliance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplianceComponent {

}
