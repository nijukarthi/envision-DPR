import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cluster-manager',
  imports: [Shared],
  templateUrl: './cluster-manager.component.html',
  styleUrl: './cluster-manager.component.scss'
})
export class ClusterManagerComponent {
  
    projectList = [{
    SlNo: "1",
    Pcode: "P-8001",
    FPD: "India_Renew1_Gadag_KA_300.3MW",
    SiteName: "ReNew-1 Gadag, KN",
    Customer: "Renew",
    Cityinfo: "Gadag",
    State: " Karnataka",
    WTGQTY: "91",
},
{
  SlNo: "2",
  Pcode: "P-8002",
  FPD: "India_Renew2_Chandwad_MH_300.3MW",
  SiteName: " ReNew2 Chanwad, MH",
  Customer: "Renew",
  Cityinfo: "Chandwad",
  uniqueS: "MH-5",
  State: " Karnataka",
  WTGQTY: "46",
  
},]

assignPopup:boolean = false;
isChecked:boolean = false;
pCode:any = "";
selectedSiteManager:any = "";
siteManager = [
            { name: 'siteManager 1', code: 'AU' },
            { name: 'siteManager 2', code: 'BR' },
            { name: 'siteManager 3', code: 'CN' },
            { name: 'siteManager 4', code: 'EG' },
            { name: 'siteManager 5', code: 'FR' },
        ];
addProjectDialog:boolean = false;

  constructor(private messageService:MessageService){}

  ngOnInit(){

  }

  showAssignPopup(val:any){
    this.assignPopup = true;
    this.isChecked = false;
    this.pCode =  val.Pcode;
  }

  saveAssign(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Assign Successfully Submited", life: 3000 });
    this.assignPopup = false;

  }

  addAssign(){
    this.addProjectDialog = true
  }
}
