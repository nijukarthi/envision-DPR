import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-hod-site-manager',
  imports: [Shared],
  templateUrl: './hod-site-manager.component.html',
  styleUrl: './hod-site-manager.component.scss'
})
export class HodSiteManagerComponent {
  projectList = []

}
