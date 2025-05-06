import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-cluster-manager',
  imports: [Shared],
  templateUrl: './cluster-manager.component.html',
  styleUrl: './cluster-manager.component.scss'
})
export class ClusterManagerComponent {
  
  projectList = []
  constructor(){}

  ngOnInit(){

  }
}
