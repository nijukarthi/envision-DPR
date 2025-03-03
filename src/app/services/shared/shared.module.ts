import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputOtpModule } from 'primeng/inputotp';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconFieldModule } from 'primeng/iconfield'; 
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { AccordionModule } from 'primeng/accordion';
import { FluidModule } from 'primeng/fluid';
import { ToolbarModule } from 'primeng/toolbar';
import {RouterModule} from '@angular/router';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    CardModule,
    TimelineModule,
    TagModule,
    InputIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    InputTextModule,
    DividerModule,
    StyleClassModule,
    PanelModule,
    TabViewModule,
    ToastModule,
    MenuModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    InputOtpModule,
    InputGroupModule,
    InputGroupAddonModule,
    DialogModule,
    ConfirmDialogModule,
    IconFieldModule,
    ProgressSpinnerModule,
    TooltipModule,
    SelectModule,
    TextareaModule,
    DatePickerModule,
    AccordionModule,
    FluidModule,
    ToolbarModule,
    RouterModule,
    OrganizationChartModule,
    ChartModule
  ],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class Shared { }
