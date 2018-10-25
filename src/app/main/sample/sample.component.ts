import { Component } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
import {CrudappService} from '../crudapp.service';
  import { DataSource } from '@angular/cdk/table';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { Title }     from '@angular/platform-browser';
import { trigger, style, transition, animate, group } from '@angular/animations';
@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss'],
    animations: [
    trigger('itemAnim', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
]
})
export class SampleComponent{
    dataSource = new UserDataSource(this.CrudappService);
   displayedColumns = ['name', 'email', 'phone', 'company'];
   getData:any;
//   showUserDetails;
    constructor(private CrudappService: CrudappService,private titleService: Title, private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
        this.titleService.setTitle('Data table sample');
    }


    showUserDetails(id){
    //  alert(id)
  //  alert(this.getData)
    this.CrudappService.getUsersById(id).subscribe( data => this.getData = data);
  //
  //  alert("-> "+this.getData)
    }
}



export class UserDataSource extends DataSource<any> {
  constructor(private CrudappService: CrudappService) {
    super();
  }
  connect(): Observable<any> {
    return this.CrudappService.getUsersTables();
  }
  disconnect() {}
}
