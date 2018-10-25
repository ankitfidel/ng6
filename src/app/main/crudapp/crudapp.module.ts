import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule, MatCardModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatListModule} from '@angular/material/list';
import { CrudappComponent } from './crudapp.component';

const routes = [
    {
        path     : 'crudapp',
        component: CrudappComponent
    }
];

@NgModule({
    declarations: [
        CrudappComponent,

    ],
    imports     : [
        RouterModule.forChild(routes),
// MatDialogModule,
        TranslateModule,
MatListModule,MatDividerModule,MatCardModule,
// MatTableModule,MatPaginatorModule,
        FuseSharedModule
    ],

})

export class CrudappModule
{
}
