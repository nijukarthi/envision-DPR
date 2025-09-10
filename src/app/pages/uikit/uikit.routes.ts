import { Routes } from '@angular/router';
import { ButtonDemo } from './buttondemo';
import { ChartDemo } from './chartdemo';
import { FileDemo } from './filedemo';
import { FormLayoutDemo } from './formlayoutdemo';
import { InputDemo } from './inputdemo';
import { ListDemo } from './listdemo';
import { MediaDemo } from './mediademo';
import { MessagesDemo } from './messagesdemo';
import { MiscDemo } from './miscdemo';
import { PanelsDemo } from './panelsdemo';
import { TimelineDemo } from './timelinedemo';
import { TableDemo } from './tabledemo';
import { OverlayDemo } from './overlaydemo';
import { TreeDemo } from './treedemo';
import { MenuDemo } from './menudemo';
import { SiteEngComponent } from '../unikit/site-eng/site-eng.component';
import { SiteengineerComponent } from '../unikit/siteengineer/siteengineer.component';
import { SitemanagerprojectreportComponent } from '../unikit/sitemanagerprojectreport/sitemanagerprojectreport.component';
import { DprinputComponent } from '../unikit/dprinput/dprinput.component';
import { DproutputComponent } from '../unikit/dproutput/dproutput.component';
import { PlanningManagerComponent } from '../unikit/planning-manager/planning-manager.component';
import { ProductionManagerComponent } from '../unikit/production-manager/production-manager.component';
import { ProjectManagerComponent } from '../unikit/project-manager/project-manager.component';
import { ClusterManagerComponent } from '../unikit/cluster-manager/cluster-manager.component';
import { HodSiteManagerComponent } from '../unikit/hod-site-manager/hod-site-manager.component';
import { RevenueProductionComponent } from '../unikit/revenue-production/revenue-production.component';
import { DproutputValueComponent } from '../unikit/dproutput-value/dproutput-value.component';
import { ManagementComponent } from '../unikit/management/management.component';
import { ImcComponent } from '../unikit/imc/imc.component';
import { CashComponent } from '../unikit/cash/cash.component';

export default [
    { path: 'button', data: { breadcrumb: 'Button' }, component: ButtonDemo },
    { path: 'charts', data: { breadcrumb: 'Charts' }, component: ChartDemo },
    { path: 'file', data: { breadcrumb: 'File' }, component: FileDemo },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, component: FormLayoutDemo },
    { path: 'site-eng', data: { breadcrumb: 'Site Engineer' }, component: SiteEngComponent },
    { path: 'site-eng-Project-report', data: { breadcrumb: 'Site Engineer' }, component: SitemanagerprojectreportComponent },
    { path: 'siteengineer', data: { breadcrumb: 'Site Engineer' }, component: SiteengineerComponent },
    { path: 'dprInput', data: { breadcrumb: 'Site Engineer' }, component: DprinputComponent },
    { path: 'dprOutput', data: { breadcrumb: 'Site Engineer' }, component: DproutputComponent },
    { path: 'dprOutputValue', data: { breadcrumb: 'Site Engineer' }, component: DproutputValueComponent },
    { path: 'planningManager', data: { breadcrumb: 'Site Engineer' }, component: PlanningManagerComponent },
    { path: 'productionManager', data: { breadcrumb: 'Site Engineer' }, component: ProductionManagerComponent },
    { path: 'projectManager', data: { breadcrumb: 'Site Engineer' }, component: ProjectManagerComponent },
    { path: 'clusterManager', data: { breadcrumb: 'Site Engineer' }, component: ClusterManagerComponent },
    { path: 'siteManager', data: { breadcrumb: 'Site Engineer' }, component: HodSiteManagerComponent },
    { path: 'revenue-prodcution', data: { breadcrumb: 'Site Engineer' }, component: RevenueProductionComponent },
    { path: 'revenue', data: { breadcrumb: 'Site Engineer' }, component: ManagementComponent },
    { path: 'imc', data: { breadcrumb: 'Site Engineer' }, component: ImcComponent },
    { path: 'cash', data: { breadcrumb: 'Site Engineer' }, component: CashComponent },
    { path: 'input', data: { breadcrumb: 'Input' }, component: InputDemo },
    { path: 'list', data: { breadcrumb: 'List' }, component: ListDemo },
    { path: 'media', data: { breadcrumb: 'Media' }, component: MediaDemo },
    { path: 'message', data: { breadcrumb: 'Message' }, component: MessagesDemo },
    { path: 'misc', data: { breadcrumb: 'Misc' }, component: MiscDemo },
    { path: 'panel', data: { breadcrumb: 'Panel' }, component: PanelsDemo },
    { path: 'timeline', data: { breadcrumb: 'Timeline' }, component: TimelineDemo },
    { path: 'table', data: { breadcrumb: 'Table' }, component: TableDemo },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, component: OverlayDemo },
    { path: 'tree', data: { breadcrumb: 'Tree' }, component: TreeDemo },
    { path: 'menu', data: { breadcrumb: 'Menu' }, component: MenuDemo },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
