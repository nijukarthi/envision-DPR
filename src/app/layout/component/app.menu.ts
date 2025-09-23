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
            {
                label: 'Portfolio',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['//pages'],
                items: [
                   /*  {
                        label: 'Global Report',
                        icon: 'pi pi-fw pi-globe',
                        
                    }, */
                    {
                        label: "Onshore Wind",
                        icon: 'pi pi-fw pi-user',
                         items: [
                            {
                                label: 'Project',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager'],
                                items: [
                            {
                                label: 'Project Planning',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                              
                            },
                            {
                                label: 'TSA',
                                icon: 'pi pi-fw pi-bookmark',
                                items:[
                                  {label:'T Production'},
                                  {label:'T Delivery'},
                                ]
                              
                            },
                            {
                                label: 'T I&C',
                                icon: 'pi pi-fw pi-bookmark',
                                 items:[
                                  {label:'WTG Receiving'},
                                  {label:'Foundation'},
                                  {label:'Instllation'},
                                  {label:'Commissioning'},
                                  {label:'STPT'},
                                  {label:'HOTO'},
                                ]
                            },
                            {
                                label: 'T Cash',
                                icon: 'pi pi-fw pi-bookmark',
                                items:[
                                  {label:'Work Complete'},
                                  {label:'Invoice'},
                                ]
                               
                            },
                            
                        ],
                            },
                            {
                                label: 'O&M',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/app/uikit/productionManager'],
                                 items: [
                            {
                                label: 'O&M Planning',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                              
                            },
                            {
                                label: 'T Warranty',
                                icon: 'pi pi-fw pi-bookmark',
                              
                            },
                            {
                                label: 'LTSA',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            /* {
                                label: 'Tower',
                                icon: 'pi pi-fw pi-bookmark',
                               
                            }, */
                            
                        ],
                            },
                            /* {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            } */

                        ]
                       /*  items: [
                            {
                                label: 'Planning Manager',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager']
                            },
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/app/uikit/productionManager'],
                                 items: [
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                              
                            },
                            {
                                label: 'Nacelle & Hub',
                                icon: 'pi pi-fw pi-bookmark',
                              
                            },
                            {
                                label: 'Blade',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Tower',
                                icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            
                        ],
                            },
                            {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            }

                        ] */
                    },
                     {
                        label: "BESS",
                        icon: 'pi pi-fw pi-user',
                        items:[
                            {label:'BESS Project',
                                 items: [
                            {
                                label: 'BESS Planning',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/app/uikit/planningManager'],
                                item:[
                                    {}
                                ]
                            },
                            {
                                label: 'BSA',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/app/uikit/productionManager'],
                                 items: [
                            {
                                label: 'Production Manager',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/app/uikit/productionManager'],
                                items:[
                                    {
                                label: 'AC',
                                icon: 'pi pi-fw pi-bookmark',
                              
                            },
                            {
                                label: 'PCS',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'SCADA',
                                icon: 'pi pi-fw pi-bookmark',
                               
                            },
                                ]
                              
                            },
                            
                            
                        ],
                            },
                                     
                                     {
                                         label: 'BESS I&C',
                                         icon: 'pi pi-fw pi-user',
                                     },
                                     {
                                         label: 'BESS Cash',
                                         icon: 'pi pi-fw pi-user',
                                     },
                           /*  {
                                label: 'Delivery Manager',
                                icon: 'pi pi-building-columns',
                                routerLink: ['/app/uikit/projectManager']
                            },
                            {
                                label: 'Cluster Manager',
                                icon: 'pi pi-id-card',
                                routerLink: ['/app/uikit/clusterManager']
                            },
                            {
                                label: 'Site Manager',
                                icon: 'pi pi-shield',
                                routerLink: ['/app/uikit/siteManager']
                            } */

                        ]
                            },
                            
                            {label:'BESS O&M',
                                items:[
                                    {label:'BESS O&M Plan'},
                                    {label:'BESS Warranty'},
                                    {label:'BESS LTSA'},
                            ]
                            }
                        ]
                       
                    }
                   
                ]
            },
            {
                 label: 'TSA',
                icon: 'pi pi-fw pi-briefcase',
                items:[
                    {
                        label: 'Prod',
                        icon: 'pi pi-fw pi-sign-in',
                        //routerLink: ['/app/uikit/planningManager']
                    },
                    {
                        label: 'Delivery',
                        icon: 'pi pi-fw pi-sign-in',
                        //routerLink: ['/app/uikit/planningManager']
                    }
                ]
            },
            {
                 label: 'I & C',
                icon: 'pi pi-fw pi-briefcase',
                items:[
                    {
                        label: 'Cluster',
                        icon: 'pi pi-fw pi-sign-in',
                        //routerLink: ['/app/uikit/planningManager']
                    },
                    {
                        label: 'SI',
                        icon: 'pi pi-fw pi-sign-in',
                        //routerLink: ['/app/uikit/planningManager']
                    }
                ]
            },
            {
                 label: 'Cash',
                icon: 'pi pi-fw pi-briefcase',
                items:[
                    {
                        label: 'Cash',
                        icon: 'pi pi-fw pi-sign-in',
                        //routerLink: ['/app/uikit/planningManager']
                    }
                ]
            },
             {
                label: 'MANAGEMENT',
                items: [
                    { label: 'Revenue', icon: 'pi pi-wallet', routerLink: ['/app/uikit/revenue'],
                    },
                    {
                        label: 'IMC', icon: 'pi pi-bolt', routerLink: ['/app/uikit/imc'],
                    },
                    {
                        label: 'Cash', icon: 'pi pi-indian-rupee', routerLink: ['/app/uikit/cash'],
                    }
                    
                ],
                //visible: this.siteManager 
            },
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
                visible: this.users
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
