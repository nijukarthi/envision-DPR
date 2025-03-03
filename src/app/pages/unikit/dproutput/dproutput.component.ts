import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dproutput',
  imports: [Shared],
  templateUrl: './dproutput.component.html',
  styleUrl: './dproutput.component.scss'
})
export class DproutputComponent {

  constructor(private router:Router){}
  

  showOutputvalue(val:any){
    try{
    if(val == 'plainDPR'){
      sessionStorage.setItem('DRPOutput','plainDPR');
      this.router.navigate(['/app/uikit/dprOutputValue'])
    }else if(val == 'planActualDPR'){
      sessionStorage.setItem('DRPOutput','planActualDPR');
      this.router.navigate(['/app/uikit/dprOutputValue'])
    }else if(val == 'graphicalDPR'){
      sessionStorage.setItem('DRPOutput','graphicalDPR');
      this.router.navigate(['/app/uikit/dprOutputValue'])
    }
    }catch(e){
      console.log(e);
      
    }
  }

}
