import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatTableModule,MatGridListModule,MatPaginatorModule} from '@angular/material';
import { DetailsComponent } from './details.component';

const routes = [
    {
        path     : 'crudapp/details/:id',
        component: DetailsComponent
    }
];

@NgModule({
    declarations: [
        DetailsComponent
            ],

    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,MatGridListModule,
MatTableModule,MatPaginatorModule,
        FuseSharedModule
    ]
})

export class DetailsModules
{
}
