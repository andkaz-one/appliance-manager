import { Component, ChangeDetectionStrategy, input } from "@angular/core";
import { ClrAccordionModule } from "@clr/angular";


@Component({
    selector: 'app-appliance-sidebar',
    standalone: true,
    imports: [ClrAccordionModule],
    templateUrl: './appliance-sidebar.component.html',
    styleUrl: './appliance-sidebar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplianceSidebarComponent {

    
}