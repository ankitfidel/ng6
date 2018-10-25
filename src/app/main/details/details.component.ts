import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CrudappService} from '../crudapp.service';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})



export class DetailsComponent implements OnInit {
user$:any;
  constructor(private CrudappService: CrudappService,private titleService: Title, private route: ActivatedRoute) {

this.route.params.subscribe(params => this.user$  = params.id)
  }

  ngOnInit() {
  //  alert(this.user$)
    this.titleService.setTitle(this.user$ + ' - detaisl');
     this.CrudappService.getUserById(this.user$).subscribe(data => this.user$ = data);
  }

}
