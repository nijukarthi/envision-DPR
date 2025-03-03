import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dproutput-value',
  imports: [Shared],
  templateUrl: './dproutput-value.component.html',
  styleUrl: './dproutput-value.component.scss'
})
export class DproutputValueComponent {
  isPlainDRP: boolean = false;
  isActualPlanDRP: boolean = false;
  isGraphicalDRP: boolean = false;
  plainDRP = [1,2,3,4,5,6,7,8,9,10];
  loading: boolean = true;
  rootCause:boolean = false;
  rcaValue:any = "";
  reason = [];
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);


  data1 = [
    { name: 'WTG Dispatch', val: '02-03-2025' },
    { name: 'WTG Delivery', val: 25 },
    { name: 'Foundation', val: 25 },
    { name: 'MCC', val: 25 },
    { name: 'MVC', val: 25 },
    { name: 'STPT', val: 25 },
    { name: 'HOTO', val: 25 },
    { name: 'Installation', val: 25 },
    { name: 'Frames', val: 25 },
    { name: 'Rotating Devices', val: 25 },
  ];

  data2 = [
    { name: 'WTG Dispatch', val: '02-03-2025' },
    { name: 'WTG Delivery', val: 25 },
    { name: 'Foundation', val: 25 },
    { name: 'MCC', val: 25 },
    { name: 'MVC', val: 25 },
    { name: 'STPT', val: 25 },
    { name: 'HOTO', val: 25 },
    { name: 'Installation', val: 25 },
    { name: 'Frames', val: 25 },
    { name: 'Rotating Devices', val: 25 },
  ];

    constructor(private router:Router,private cd: ChangeDetectorRef){}

    ngOnInit(){
     var  DRPOutput = sessionStorage.getItem('DRPOutput')
      if(DRPOutput == 'plainDPR'){
        this.isPlainDRP = true;
        this.loading = false;
      }else if(DRPOutput == 'planActualDPR'){
        this.isActualPlanDRP = true;
      }else if(DRPOutput == 'graphicalDPR'){
        this.isGraphicalDRP = true;
      }

      this.initChart();
    }

    showRootCause(val:any){
      try{
        this.rootCause = true;
        this.rcaValue = val;
      }catch(e){
        console.log(e);
        
      }
    }
    initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      label: 'Plan',
                      backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                      borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                      data: [65, 59, 80, 81, 56, 55, 40]
                  },
                  {
                      label: 'Acual',
                      backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                      borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                      data: [28, 48, 40, 19, 86, 27, 90]
                  }
              ]
          };

          this.options = {
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
                          color: surfaceBorder,
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
          this.cd.markForCheck()
      }
  }
  
}
