import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
// import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthRESTService } from '@services/authREST.service';
import { Butler } from '@services/butler.service';
import { DataApiService } from '@services/data-api.service'; 
import{NgxUiLoaderService} from 'ngx-ui-loader';
import { HttpClient } from  '@angular/common/http';

import { DemoFilePickerAdapter } from  './file-picker.adapter';

@Component({
  selector: 'app-newpart',
  templateUrl: './newpart.component.html',
  styleUrls: ['./newpart.component.scss']
})
export class NewpartComponent implements OnInit, AfterViewInit {
cards$:any=[];
  defaultNavActiveId = 1;
adapter = new  DemoFilePickerAdapter(this.http,this._butler.file);
  constructor(
private http: HttpClient,
 private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private router: Router,
    public _butler:Butler,
    public dataApiService: DataApiService,
    // private formBuilder: FormBuilder,
    public AuthRESTService:AuthRESTService

    ) {


     }

  ngOnInit(): void { 

  }


 getCards(){
    this.dataApiService.getAllCards().subscribe(response => {
    this.cards$ = response
    });
 }
  ngAfterViewInit(): void {
this.getCards();
    // Show chat-content when clicking on chat-item for tablet and mobile devices
    document.querySelectorAll('.chat-list .chat-item').forEach(item => {
      item.addEventListener('click', event => {
        document.querySelector('.chat-content')!.classList.toggle('show');
      })
    });

  }

  // back to chat-list for tablet and mobile devices
  backToChatList() {
    document.querySelector('.chat-content')!.classList.toggle('show');
  }

  save() {
    console.log('passs');
    
  }

}
