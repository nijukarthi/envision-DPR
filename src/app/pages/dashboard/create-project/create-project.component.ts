import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-create-project',
  imports: [Shared,CommonModule,FormsModule,],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

  activeIndex: number | undefined = 0;
  active:any = 0;
  cdate: any;
  showCreateProject:boolean = true;
  showCreateProjectAccordian:boolean = false;
  products:any = [1]

  activeIndexChange(index : number){
      this.activeIndex = index
  }

  ngOnInit(){
    this.cdate = new Date();
  }

  createProjectSubmit(){
    try{
      this.showCreateProject = true;
    }catch(e){
      console.log(e);
      
    }
  }

  nextSubmit(val:any){
    try{
      if(val == 'next'){
        this.showCreateProjectAccordian = true;
        this.showCreateProject = false;
        setTimeout(() => {
          document.getElementById('targetGreen')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }, 0);
      }else if(val == 'back'){
        this.showCreateProject = true;
        this.showCreateProjectAccordian = false;
      }
    }catch(e){
      console.log(e);
      
    }
  }

}
