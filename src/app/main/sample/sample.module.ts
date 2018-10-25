import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatTableModule,MatButtonModule,MatDialogModule,MatCardModule,MatPaginatorModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { SampleComponent } from './sample.component';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,MatCardModule,MatExpansionModule,
MatTableModule,MatPaginatorModule,MatButtonModule,
        FuseSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
