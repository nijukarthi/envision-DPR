import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-revenue-production',
  imports: [Shared],
  templateUrl: './revenue-production.component.html',
  styleUrl: './revenue-production.component.scss'
})
export class RevenueProductionComponent {
  products:any = [
    {wtg:'WTG1',plan:'10',actual:'15',latest:'20',
      planHub:'5',actualHub:'8',latestHub:'18',
      planBlade:'20',actualBlade:'35',latestBlade:'40',
      planTower:'9',actualTower:'15',latestTower:'50',
      planAnchor:'10',actualAnchor:'12',latestAnchor:'20',
    },
    {wtg:'WTG2',plan:'10',actual:'15',latest:'20',
      planHub:'5',actualHub:'8',latestHub:'18',
      planBlade:'20',actualBlade:'35',latestBlade:'40',
      planTower:'9',actualTower:'15',latestTower:'50',
      planAnchor:'10',actualAnchor:'12',latestAnchor:'20',
    },
    {wtg:'WTG3',plan:'10',actual:'15',latest:'20',
      planHub:'5',actualHub:'8',latestHub:'18',
      planBlade:'20',actualBlade:'35',latestBlade:'40',
      planTower:'9',actualTower:'15',latestTower:'50',
      planAnchor:'10',actualAnchor:'12',latestAnchor:'20',
    },
    {wtg:'WTG4',plan:'10',actual:'15',latest:'20',
      planHub:'5',actualHub:'8',latestHub:'18',
      planBlade:'20',actualBlade:'35',latestBlade:'40',
      planTower:'9',actualTower:'15',latestTower:'50',
      planAnchor:'10',actualAnchor:'12',latestAnchor:'20',
    },
    {wtg:'WTG5',plan:'10',actual:'15',latest:'20',
      planHub:'5',actualHub:'8',latestHub:'18',
      planBlade:'20',actualBlade:'35',latestBlade:'40',
      planTower:'9',actualTower:'15',latestTower:'50',
      planAnchor:'10',actualAnchor:'12',latestAnchor:'20',
    },
    {wtg:'WTG6',plan:'10',actual:'15',latest:'20',
      planHub:'5',actualHub:'8',latestHub:'18',
      planBlade:'20',actualBlade:'35',latestBlade:'40',
      planTower:'9',actualTower:'15',latestTower:'50',
      planAnchor:'10',actualAnchor:'12',latestAnchor:'20',
    },
  ]
}
