import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TabsModule } from 'primeng/tabs';
import { ToolbarModule } from 'primeng/toolbar';
import { Shared } from '../../../services/shared/shared.module';


@Component({
  selector: 'app-dash',
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    AccordionModule,
    FieldsetModule,
    MenuModule,
    InputTextModule,
    DividerModule,
    SplitterModule,
    PanelModule,
    TabsModule,
    IconFieldModule,
    InputIconModule,
    Shared
],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {

  activeIndex: number | undefined = 0;
  active:any = 0;
  cdate: any;
  showCreateProject:boolean = false;
  showCreateProjectAccordian:boolean = false;

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
      }else if(val == 'back'){
        this.showCreateProject = true;
        this.showCreateProjectAccordian = false;
      }
    }catch(e){
      console.log(e);
      
    }
  }
}
