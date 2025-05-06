import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-production-manager',
  imports: [Shared],
  templateUrl: './production-manager.component.html',
  styleUrl: './production-manager.component.scss'
})
export class ProductionManagerComponent {
  projectList = []
clusterManager = [
  { name: 'Manager1', code: 'NY' },
  { name: 'Manager2', code: 'RM' },
  { name: 'Manager3', code: 'LDN' },
  { name: 'Manager4', code: 'IST' },
  { name: 'Manager5', code: 'PRS' }
];
addProjectDialog:boolean = false;
  constructor(){}

  ngOnInit(){

  }
}
