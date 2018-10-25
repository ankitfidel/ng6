import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator,MatDialog, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { Observable } from 'rxjs';
import {CrudappService} from '../crudapp.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-crudapp',
  templateUrl: './crudapp.component.html',
  styleUrls: ['./crudapp.component.scss']
})


export class CrudappComponent implements OnInit {
  users$: Object;

 constructor(private CrudappService: CrudappService,private titleService: Title){
   this.titleService.setTitle('CRUD App');
 }

// onclick:any;
// abcc:any;
@ViewChild(MatPaginator) paginator: MatPaginator;
ngOnInit() {
  // this.dataSource.paginator = this.paginator;
   this.CrudappService.getUsers().subscribe( data => this.users$ = data);

 }
    // displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
   //  displayedColumnsss: string[] = ['userid', 'title', 'body'];
   //  public modaldata: modaldata[];
   // onclick(id){
   //   //alert(id);
   //   this.abcc = this.CrudappService.getUserById(+id).subscribe( data => {
   //           this.modaldata = data;
   //         });
   //   const dialogRef = this.dialog.open(DialogContentExampleDialog, {
   //     data: this.abcc
   //   });
   // }



}
