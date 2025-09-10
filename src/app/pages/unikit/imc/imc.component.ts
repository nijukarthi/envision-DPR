import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-imc',
  imports: [Shared],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.scss'
})
export class ImcComponent {
dummy1 = ['Foundation','Installation','MCC','Precom','MDCC','Grid Commisioning','SCOD','STPT','Hoto O&M','Hoto Customer'];
  title:any = "";

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


  showPopup(val:any){
    try{
      this.drpModel = true;
      this.title = val
    }catch(e){
      console.log(e);
    }
  }
}
