import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { LoginService } from '../../../services/login/login.service';
import { DatePickerModule } from 'primeng/datepicker';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { SplitButtonModule } from 'primeng/splitbutton';
@Component({
  selector: 'app-site-eng',
  imports: [InputTextModule, FluidModule, ButtonModule, SelectModule,
    FormsModule, TextareaModule, CardModule, DialogModule, ChipModule, CommonModule, ReactiveFormsModule,
    FormsModule, DatePickerModule, ToastModule,AccordionModule,ChartModule,SplitButtonModule],
  providers: [MessageService, DatePipe],
  templateUrl: './site-eng.component.html',
  styleUrl: './site-eng.component.scss'
})
export class SiteEngComponent {

  openProjectList: boolean = false;
  openProjectInputs: boolean = false;
  NoOfProject: any = [];
  dprShow: boolean = false;
  projectName: any = "";
  empDetails: any = "";
  addProjectDetailForm: any;
  projectList: any = "";
  openProjectOutputList: boolean = false;
  outputList: any = "";
  isOutputClicked: boolean = false;
  openInpButton:boolean = false;
  barData: any;
  barOptions: any;
  standardBtns:boolean = false;
  isStandard:boolean = false;
  consolidated:any;

  @ViewChild('DPR', { static: false }) element!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private scroller: ViewportScroller, private api: LoginService,
    private fb: FormBuilder, private messageService: MessageService, private datePipe: DatePipe) { }

  ngOnInit() {

    this.consolidated = [
      {
          label: 'Sheet View',
          /* command: () => {
              this.update();
          } */
      },
      {
        label: 'Bar Chat',
        /* command: () => {
            this.update();
        } */
    }
    ]

    console.log(this.NoOfProject);
    this.getEmpDetails();
    this.getProjectDetails();
    this.addProjectDetailForm = this.fb.group({
      siteName: [''],
      proCustomer: [''],
      numOfWTGs: [''],
      capacity: [''],
      tsDate: [''],
      supplyContractNo: [''],
      supplyContractDate: [''],
      serviceContractDate: [''],
      dateOfCommencement: [''],
      dateOfCompletion: [''],
      forecastedDateOfCompletion: [''],
      totalDispatches: [''],
      nacelle: [''],
      hub: [''],
      blade: [''],
      tower: [''],
      mvc: [''],
      envision: [''],
      envisionEmp: [''],
      contractor: [''],
      maximo: [''],
      installationActiovity: [''],
      anchorCage: [''],
      wtgFoundation: [''],
      cranesAvailable: [''],
      wtgInstallation: [''],
      installation: [''],
      wtgMCC: [''],
      mccSignOff: [''],
      wtgPreComm: [''],
      wtgComm: [''],
      stpt: [''],
      stptSignOff: [''],
      hoto: [''],
      nacelleFrames: [''],
      nacelleFramesBalance: [''],
      nacelleDispatchThisWeek: [''],
      hubFrames: [''],
      hubFramesBalance: [''],
      hubFramesDispatchThisWeek: [''],
      bladeFrames: [''],
      bladeFramesBalance: [''],
      torquing: [''],
      inspection: [''],
      rotationgDevices: [''],
      auxillary: [''],

    })
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
              borderColor: documentStyle.getPropertyValue('--p-primary-500'),
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
              borderColor: documentStyle.getPropertyValue('--p-primary-200'),
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]

     
  };

  this.barOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
        legend: {
            labels: {
                color: textColor
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: textColorSecondary,
                font: {
                    weight: 500
                }
            },
            grid: {
                display: false,
                drawBorder: false
            }
        },
        y: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};



  }

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];

  dropdownItem = null;

  open(val: any) {
    if (val == 'input') {
      this.openProjectList = true;
      this.isOutputClicked = false;
    } else if (val == 'output') {
      this.openProjectOutputList = true;
      this.isOutputClicked = true;
    }
  }

  close() {
    //this.openProjectList = false;
    this.addProjectDetailForm.enable();
    this.addProjectDetailForm.reset();
  }

  showDPR() {
    this.dprShow = true;
    setTimeout(() => {
      document.getElementById('targetGreen')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 0);


  }

  openProjectInput(val: any) {
    this.openInpButton = true;
    console.log(this.isOutputClicked);
    
    /* this.api.getprojectwithdetails(val.proId, "")
      .subscribe((res) => {
        console.log(res);
        if (res.projectDetails != null) {
          this.messageService.add({ severity: 'warn', summary: 'Already Submitted', detail: "Detail Already Submitted", life: 3000 });
        } else {
          this.openProjectInputs = true;
          console.log(val);
          this.projectName = val;
          this.projectList = val;
          var list = this.NoOfProject.filter((item: any) => item.proCode == val.proCode)
          if (list) {
            this.addProjectDetailForm.patchValue({
              siteName: list[0].siteName,
              proCustomer: list[0].proCustomer,
              numOfWTGs: list[0].numOfWTGs,
              capacity: list[0].capacity,
              tsDate: list[0].tsDate,
              supplyContractNo: list[0].supplyContractNo,
              supplyContractDate: list[0].supplyContractDate,
              serviceContractDate: list[0].serviceContractDate,
            })
            this.addProjectDetailForm.get('siteName')?.disable();
            this.addProjectDetailForm.get('proCustomer')?.disable();
            this.addProjectDetailForm.get('numOfWTGs')?.disable();
            this.addProjectDetailForm.get('capacity')?.disable();
            this.addProjectDetailForm.get('tsDate')?.disable();
            this.addProjectDetailForm.get('supplyContractNo')?.disable();
            this.addProjectDetailForm.get('supplyContractDate')?.disable();
            this.addProjectDetailForm.get('serviceContractDate')?.disable();
          } else {
            console.log(list);
          }
        }
      }, err => {
        this.messageService.add({ severity: 'warn', summary: 'Already Submitted', detail: "Detail Already Submitted", life: 3000 });
      }) */
  }

  getEmpDetails() {
    try {
      let token = localStorage.getItem('Token');
      this.api.empDetails(token)
        .subscribe((res) => {
          console.log(res);
          this.empDetails = res;

        }, err => {
          console.log(err);

        })

    } catch (e) {
      console.log(e);

    }
  }

  getProjectDetails() {
    try {

      let data = "";
      this.api.getprojectbyempid(data)
        .subscribe((res) => {
          console.log(res);
          this.NoOfProject = res;

        }, err => {
          console.log(err);

        })

    } catch (e) {
      console.log(e);

    }
  }

  saveProjectDetails() {
    try {
      console.log(this.addProjectDetailForm.value);
      const dateOfCommencement = this.datePipe.transform(this.addProjectDetailForm.get('dateOfCommencement').value, 'yyyy-MM-dd');
      const dateOfCompletion = this.datePipe.transform(this.addProjectDetailForm.get('dateOfCompletion').value, 'yyyy-MM-dd');
      const forecastedDateOfCompletion = this.datePipe.transform(this.addProjectDetailForm.get('forecastedDateOfCompletion').value, 'yyyy-MM-dd');
      console.log('Formatted Date:', dateOfCommencement);

      let data = {
        "dateOfCommencement": dateOfCommencement,
        "dateOfCompletion": dateOfCompletion,
        "forecastedDateOfCompletion": forecastedDateOfCompletion,
        "totalDispatches": this.addProjectDetailForm.get('totalDispatches').value,
        "nacelle": this.addProjectDetailForm.get('nacelle').value,
        "hub": this.addProjectDetailForm.get('hub').value,
        "blade": this.addProjectDetailForm.get('blade').value,
        "tower": this.addProjectDetailForm.get('tower').value,
        "mvc": this.addProjectDetailForm.get('mvc').value,
        "envision": this.addProjectDetailForm.get('envision').value,
        "envisionEmp": this.addProjectDetailForm.get('envisionEmp').value,
        "contractor": this.addProjectDetailForm.get('contractor').value,
        "maximo": this.addProjectDetailForm.get('maximo').value,
        "installationActiovity": this.addProjectDetailForm.get('installationActiovity').value,
        "anchorCage": this.addProjectDetailForm.get('anchorCage').value,
        "wtgFoundation": this.addProjectDetailForm.get('wtgFoundation').value,
        "cranesAvailable": this.addProjectDetailForm.get('cranesAvailable').value,
        "wtgInstallation": this.addProjectDetailForm.get('wtgInstallation').value,
        "installation": this.addProjectDetailForm.get('installation').value,
        "wtgMCC": this.addProjectDetailForm.get('wtgMCC').value,
        "mccSignOff": this.addProjectDetailForm.get('mccSignOff').value,
        "wtgPreComm": this.addProjectDetailForm.get('wtgPreComm').value,
        "wtgComm": this.addProjectDetailForm.get('wtgComm').value,
        "stpt": this.addProjectDetailForm.get('stpt').value,
        "stptSignOff": this.addProjectDetailForm.get('stptSignOff').value,
        "hoto": this.addProjectDetailForm.get('hoto').value,
        "nacelleFrames": this.addProjectDetailForm.get('nacelleFrames').value,
        "nacelleFramesBalance": this.addProjectDetailForm.get('nacelleFramesBalance').value,
        "nacelleDispatchThisWeek": this.addProjectDetailForm.get('nacelleDispatchThisWeek').value,
        "hubFrames": this.addProjectDetailForm.get('hubFrames').value,
        "hubFramesBalance": this.addProjectDetailForm.get('hubFramesBalance').value,
        "hubFramesDispatchThisWeek": this.addProjectDetailForm.get('hubFramesDispatchThisWeek').value,
        "bladeFrames": this.addProjectDetailForm.get('bladeFrames').value,
        "bladeFramesBalance": this.addProjectDetailForm.get('bladeFramesBalance').value,
        "torquing": this.addProjectDetailForm.get('torquing').value,
        "inspection": this.addProjectDetailForm.get('inspection').value,
        "rotationgDevices": this.addProjectDetailForm.get('rotationgDevices').value,
        "auxillary": this.addProjectDetailForm.get('auxillary').value
      }
      console.log(data);
      console.log(this.projectList.proId);


      this.api.addprodetails(this.projectList.proId, data)
        .subscribe((res) => {
          this.addProjectDetailForm.reset();
          this.openProjectInputs = false;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "Project Saved Successfully", life: 3000 });
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.msg, life: 3000 });
        })



    } catch (e) {
      console.log(e);

    }
  }

  openClosedProjectInput(val: any) {
    console.log(val);
    this.projectName = val.proName;
    this.projectList = val.proName;
    this.api.getprojectwithdetails(val.proId, "")
      .subscribe((res) => {
        console.log(res);
        this.outputList = res;
        console.log(res.projectDetails);
        if (this.outputList != null) {
          if (this.outputList.projectDetails != null) {
            this.openProjectInputs = true;
          } else {
            this.messageService.add({ severity: 'error', summary: 'No Value', detail: "Detail Not Submitted Yet", life: 3000 });
            this.close();
          }
          var list = this.NoOfProject.filter((item: any) => item.proId == val.proId)
          if (list) {
            this.addProjectDetailForm.patchValue({
              siteName: list[0].siteName,
              proCustomer: list[0].proCustomer,
              numOfWTGs: list[0].numOfWTGs,
              capacity: list[0].capacity,
              tsDate: list[0].tsDate,
              supplyContractNo: list[0].supplyContractNo,
              supplyContractDate: list[0].supplyContractDate,
              serviceContractDate: list[0].serviceContractDate,
              /* dateOfCommencement:this.outputList.projectDetails.dateOfCommencement,
              dateOfCompletion:this.outputList.projectDetails.dateOfCompletion,
              forecastedDateOfCompletion:this.outputList.projectDetails.forecastedDateOfCompletion,
              totalDispatches:this.outputList.projectDetails.totalDispatches,
              nacelle:this.outputList.projectDetails.nacelle,
              hub:this.outputList.projectDetails.hub,
              blade:this.outputList.projectDetails.blade,
              tower:this.outputList.projectDetails.tower,
              mvc:this.outputList.projectDetails.mvc,
              envision:this.outputList.projectDetails.envision,
              envisionEmp:this.outputList.projectDetails.envisionEmp,
              contractor:this.outputList.projectDetails.contractor,
              maximo:this.outputList.projectDetails.maximo,
              installationActiovity:this.outputList.projectDetails.installationActiovity,
              anchorCage:this.outputList.projectDetails.anchorCage, */

            })
            this.addProjectDetailForm.patchValue(this.outputList.projectDetails)
            /* this.addProjectDetailForm.get('siteName')?.disable();
            this.addProjectDetailForm.get('proCustomer')?.disable();
            this.addProjectDetailForm.get('numOfWTGs')?.disable();
            this.addProjectDetailForm.get('capacity')?.disable();
            this.addProjectDetailForm.get('tsDate')?.disable();
            this.addProjectDetailForm.get('supplyContractNo')?.disable();
            this.addProjectDetailForm.get('supplyContractDate')?.disable();
            this.addProjectDetailForm.get('serviceContractDate')?.disable();
            this.addProjectDetailForm.get('dateOfCommencement')?.disable();
            this.addProjectDetailForm.get('dateOfCompletion')?.disable();
            this.addProjectDetailForm.get('forecastedDateOfCompletion')?.disable();
            this.addProjectDetailForm.get('totalDispatches')?.disable();
            this.addProjectDetailForm.get('nacelle')?.disable();
            this.addProjectDetailForm.get('hub')?.disable();
            this.addProjectDetailForm.get('blade')?.disable();
            this.addProjectDetailForm.get('tower')?.disable();
            this.addProjectDetailForm.get('mvc')?.disable();
            this.addProjectDetailForm.get('envision')?.disable();
            this.addProjectDetailForm.get('envisionEmp')?.disable();
            this.addProjectDetailForm.get('contractor')?.disable();
            this.addProjectDetailForm.get('maximo')?.disable();
            this.addProjectDetailForm.get('installationActiovity')?.disable();
            this.addProjectDetailForm.get('anchorCage')?.disable(); */
            this.addProjectDetailForm.disable();
          } else {
            console.log(list);
          }
        }
      }, err => {
        console.log(err);
      })
  }

  openInputList(val:any){
    this.standardBtns = true
    /* this.projectList = val;
    console.log(this.isOutputClicked);
    this.openProjectInputs = true; */

  }
  openVariables(val:any){
    if(val == 'standard'){
      this.isStandard = true;
    }else{
      this.isStandard = false;
    }
    this.projectList = val;
    console.log(this.isOutputClicked);
    this.openProjectInputs = true;

  }

  
}
