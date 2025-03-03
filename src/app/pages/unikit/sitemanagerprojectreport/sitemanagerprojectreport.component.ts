import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-sitemanagerprojectreport',
  imports: [Shared],
  templateUrl: './sitemanagerprojectreport.component.html',
  styleUrl: './sitemanagerprojectreport.component.scss'
})
export class SitemanagerprojectreportComponent {
  dummy = [1];
  dummy1 = [1,2,3];
  dummy2 = [4,5,6];

  drpModel:boolean= false;
  cDate = new Date();
  data1 = [
    { name: 'Contract Sign Date', val: '02-03-2025' },
    { name: 'Term Sheet Signature', val: 25 },
    { name: 'Customer', val: 25 },
    { name: 'Order Quantity', val: 25 },
  ];

  data2 = [
    { name: 'Number/MW Capacity', val: '02-03-2025' },
    { name: 'COD Plan', val: 25 },
    { name: 'Location', val: 25 },
    { name: 'State', val: 25 },
    { name: 'Pincode', val: 25 },
  ];


  showDRP(){
    try{
      this.drpModel = true;
    }catch(e){
      console.log(e);
    }
  }

}
