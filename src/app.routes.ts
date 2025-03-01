import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { Login } from './app/pages/auth/login';
import { LoginComponent } from './app/pages/auth/login/login.component';
import { AuthService } from './app/services/auth/auth.service';
import { DashComponent } from './app/pages/dashboard/dash/dash.component';
import { CreateProjectComponent } from './app/pages/dashboard/create-project/create-project.component';
import { DgrToolComponent } from './app/pages/unikit/dgr-tool/dgr-tool.component';
import { SiteengineerComponent } from './app/pages/unikit/siteengineer/siteengineer.component';

export const appRoutes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    
    {
        path: 'app',
        component: AppLayout, //canActivate: [AuthService],
        children: [
            { path: 'dash', component: Dashboard },
            { path: '', component: DashComponent },
            { path: 'createProject', component: CreateProjectComponent },
            { path: 'siteengineer', component: SiteengineerComponent },
            { path: 'dgrtools', component: DgrToolComponent },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
