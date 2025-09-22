import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-production-manager',
  imports: [Shared],
  templateUrl: './production-manager.component.html',
  styleUrl: './production-manager.component.scss'
})
export class ProductionManagerComponent {
  expandedRowsKeys: { [key: string]: boolean } = {};
  expandedRows: { [key: string]: boolean } = {};
clusterManager = [
  { name: 'Manager1', code: 'NY' },
  { name: 'Manager2', code: 'RM' },
  { name: 'Manager3', code: 'LDN' },
  { name: 'Manager4', code: 'IST' },
  { name: 'Manager5', code: 'PRS' }
];
  projectList = [{
    SlNo: "1",
    Pcode: "P-8001",
    FPD: "India_Renew1_Gadag_KA_300.3MW",
    SiteName: "ReNew-1 Gadag, KN",
    Customer: "Renew",
    Cityinfo: "Gadag",
    uniqueS: "KA-6",
    State: " Karnataka",
    WTGQTY: "3",
    Capacity: "300.3",
    PM: "Oxford Rebello",
    type1: "FTE",
    StateHead: "Srikanth Shanmugam",
    type2: "FTE",
    ConstructionManager: "OM Mishra",
    type3: "FTE",
    machinaclLead: "",
    type4: "FTE",
    StartDate: "01-01-2022",
    CompleteDate: "30-06-2025",
    DetailStatus: "Installation, O&M",
    Status4: "Execution,Service",
    ContractualCoD: "31-03-23",
    ExpectedCoD: "30-06-25",
    ActualCoD: "02-05-25",
    Delay: 763,
    Remarks: "Land delay, RoW, Delay in GSS & EHV Line"
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
  WTGQTY: "3",
  Capacity: "151.18",
  PM: "Oxford Rebello",
  type1: "FTE",
  StateHead: "Surendra Panwar",
  type2: "FTE",
  ConstructionManager: "Adil Hussain",
  type3: "DCE",
  machinaclLead: "",
  type4: "",
  StartDate: "01-01-2022",
  CompleteDate: "31-12-2025",
  DetailStatus: "Installation",
  Status4: "Execution",
  ContractualCoD: "31-03-23",
  ExpectedCoD: "30-06-25",
  ActualCoD: "02-05-25",
  Delay: 763,
  Remarks: "Project size reduced to 46"
},]

valuesofEXP:any = [
  {name:'WTG1'},{name:'WTG2'},{name:'WTG3'},
]
addProjectDialog:boolean = false;
  constructor(private messageService: MessageService){}

  ngOnInit(){

  }

   onRowExpand(event: TableRowExpandEvent) {
        //this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    }

    onRowCollapse(event: TableRowCollapseEvent) {
       // this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    }
}
