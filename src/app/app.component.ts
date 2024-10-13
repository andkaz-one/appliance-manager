import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeadbarComponent} from "./components/headbar/headbar.component";
import {ClarityModule} from "@clr/angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadbarComponent, ClarityModule, RouterLink, RouterLinkActive],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'appliance-manager-tool';
  navbarIsCollapsed: boolean = true;


}
