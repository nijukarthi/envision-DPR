import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app'] }],
            },

            {
                label: 'DGR',
                items: [
                    { label: 'DGR Tools', icon: 'pi pi-fw pi-hammer', routerLink: ['/app/dgrtools'] },
                    /* { label: 'State Head', icon: 'pi pi-fw pi-check-square',  }, *//* routerLink: ['//uikit/input'] */
                    /* { label: 'Project Manager', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', }, *//*  routerLink: ['//uikit/button'] */
                    /* { label: 'Project Engineer', icon: 'pi pi-fw pi-table',  }, *//* routerLink: ['//uikit/table'] */
                    /* { label: 'Project Planner', icon: 'pi pi-fw pi-list',  }, *//* routerLink: ['//uikit/list'] */
                    /* { label: 'Project Head', icon: 'pi pi-fw pi-share-alt', }, *//*  routerLink: ['//uikit/tree'] */
                    /* { label: 'HODs', icon: 'pi pi-fw pi-tablet',  }, *//* routerLink: ['//uikit/panel'] */
                    /* { label: 'Top Management', icon: 'pi pi-fw pi-clone',  }, *//* routerLink: ['//uikit/overlay'] */
/*                     { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['//uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['//uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['//uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['//uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['//uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['//uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['//uikit/misc'] } */
                ]
            },
            
            {
                label: 'Project Management',
                items: [
                    //{ label: 'Site Manager1', icon: 'pi pi-fw pi-id-card', routerLink: ['/app/uikit/site-eng'] },
                    { label: 'Site Manager', icon: 'pi pi-fw pi-id-card', routerLink: ['/app/uikit/siteengineer'] },
                    /* { label: 'State Head', icon: 'pi pi-fw pi-check-square',  }, *//* routerLink: ['//uikit/input'] */
                    /* { label: 'Project Manager', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', }, *//*  routerLink: ['//uikit/button'] */
                    /* { label: 'Project Engineer', icon: 'pi pi-fw pi-table',  }, *//* routerLink: ['//uikit/table'] */
                    /* { label: 'Project Planner', icon: 'pi pi-fw pi-list',  }, *//* routerLink: ['//uikit/list'] */
                    /* { label: 'Project Head', icon: 'pi pi-fw pi-share-alt', }, *//*  routerLink: ['//uikit/tree'] */
                    /* { label: 'HODs', icon: 'pi pi-fw pi-tablet',  }, *//* routerLink: ['//uikit/panel'] */
                    /* { label: 'Top Management', icon: 'pi pi-fw pi-clone',  }, *//* routerLink: ['//uikit/overlay'] */
/*                     { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['//uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['//uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['//uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['//uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['//uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['//uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['//uikit/misc'] } */
                ]
            },
           /*  {
                label: 'Reports',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['//pages'],
                items: [
                    {
                        label: 'Global Report',
                        icon: 'pi pi-fw pi-globe',
                        
                    },
                    {
                        label: 'Daily Report',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Project Management',
                                icon: 'pi pi-fw pi-sign-in',
                                
                            },
                            {
                                label: 'Project Head',
                                icon: 'pi pi-fw pi-box',
                                
                            },
                            {
                                label: 'State Head',
                                icon: 'pi pi-building-columns',
                               
                            }
                        ]
                    },
                   
                ]
            }, */
            {
                label: 'Day Activity',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
          /*   {
                label: 'Export Report',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                    },
                ]
            }, */
            {
                label: 'Exit Portal',
                items: [
                    {
                        label: 'LogOut',
                        icon: 'pi pi-sign-out',
                        command: () => {
                            this.logout();
                        },
                        routerLink: ['/']
                    },
                ]
            }
        ];
    }

    logout(){
        sessionStorage.clear();
        localStorage.clear();
    }
}
