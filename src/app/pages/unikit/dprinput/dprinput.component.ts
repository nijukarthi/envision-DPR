import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-dprinput',
  imports: [Shared],
  templateUrl: './dprinput.component.html',
  styleUrl: './dprinput.component.scss'
})
export class DprinputComponent {
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
}
