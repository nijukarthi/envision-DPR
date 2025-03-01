import { Component } from '@angular/core';
import { Shared } from '../../../services/shared/shared.module';

@Component({
  selector: 'app-siteengineer',
  imports: [Shared],
  templateUrl: './siteengineer.component.html',
  styleUrl: './siteengineer.component.scss'
})
export class SiteengineerComponent {
  data = [
    {
        label: 'HOD',
        expanded: true,
        children: [
            {
                label: 'Project Manager',
                expanded: true,
                children: [
                    {
                        label: 'Project Head'
                    },
                    {
                        label: 'Project Owner'
                    }
                ]
            },
            {
                label: 'Site Manager',
                expanded: true,
                children: [
                    {
                        label: 'Site Engineer'
                    },
                    {
                        label: 'Site Head'
                    }
                ]
            }
        ]
    }
];

}
