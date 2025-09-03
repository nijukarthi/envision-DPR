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
    siteManager:boolean = false;
    users:boolean = false;

    ngOnInit() {
        var user = sessionStorage.getItem('user');
        if(user == 'siteengineer_user1'){
            this.siteManager = true;
        }
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app'] }],
                //visible: this.siteManager && this.users
            },

            {
                label: 'DGR',
                items: [
                    { label: 'DGR Tools', icon: 'pi pi-fw pi-hammer', routerLink: ['/app/dgrtools'],
                    },
                ],
                //visible: this.siteManager && this.users
            },
            
            {
                label: 'Project Management',
                items: [
                    { label: 'Site Manager', icon: 'pi pi-fw pi-id-card', routerLink: ['/app/uikit/siteengineer'],
                    },
                ],
                //visible: this.siteManager 
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
                label: 'MANAGEMENT',
                items: [
                    {
                        label: 'Revenue',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Production',
                                icon: 'pi pi-fw pi-bars',
                                routerLink: ['/app/uikit/revenue-prodcution']
                                // items: [
                                //     { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                // ]
                            },
                            {
                                label: 'Dispatch',
                                icon: 'pi pi-fw pi-bolt',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Delivery',
                                icon: 'pi pi-fw pi-book',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Install',
                                icon: 'pi pi-fw pi-box',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Comm',
                                icon: 'pi pi-fw pi-briefcase',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'STPT',
                                icon: 'pi pi-fw pi-bullseye',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            }
                        ],
                        
                    },
                    {
                        label: 'Cash',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Production',
                                icon: 'pi pi-fw pi-bars',
                                // items: [
                                //     { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                // ]
                            },
                            {
                                label: 'Dispatch',
                                icon: 'pi pi-fw pi-bolt',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Delivery',
                                icon: 'pi pi-fw pi-book',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Install',
                                icon: 'pi pi-fw pi-box',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Comm',
                                icon: 'pi pi-fw pi-briefcase',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'STPT',
                                icon: 'pi pi-fw pi-bullseye',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            }
                        ],
                        /* items: [
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
                        ], */
                        
                    },
                    {
                        label: 'Setup',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Production',
                                icon: 'pi pi-fw pi-bars',
                                // items: [
                                //     { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                //     { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                // ]
                            },
                            {
                                label: 'Dispatch',
                                icon: 'pi pi-fw pi-bolt',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Delivery',
                                icon: 'pi pi-fw pi-book',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Install',
                                icon: 'pi pi-fw pi-box',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'Comm',
                                icon: 'pi pi-fw pi-briefcase',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            },
                            {
                                label: 'STPT',
                                icon: 'pi pi-fw pi-bullseye',
                               /*  items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }] */
                            }
                        ],
                        /* items: [
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
                        ], */
                        
                    }
                ],
                //visible: this.siteManager && this.users
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
