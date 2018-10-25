import { NgModule } from '@angular/core';
import { BrowserModule,  Title  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatCardModule,MatGridListModule,MatIconModule,MatDividerModule, MatTableModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { CrudappModule } from 'app/main/crudapp/crudapp.module';
import { DetailsModules } from 'app/main/details/details.module';

// import { DetailsComponent } from './main/details/details.component';
//
// import { CrudappComponent } from 'app/main/crudapp/crudapp.component';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        // DetailsComponent,
       // CrudappComponent
    ],
    providers: [
       Title
     ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,
        MatTableModule,
        // Material
        MatButtonModule,MatListModule,MatGridListModule,
        MatIconModule,MatDividerModule,
        MatDialogModule,MatCardModule,MatExpansionModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        CrudappModule,
        DetailsModules
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
