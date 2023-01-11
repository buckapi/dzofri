import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Butler } from '@services/butler.service';
import { DataApiService } from '@services/data-api.service'; 
@Component({
  selector: 'app-partslist',
  templateUrl: './partslist.component.html',
  styleUrls: ['./partslist.component.scss']
})
export class PartslistComponent implements OnInit, AfterViewInit {
  cards$:any=[];
  defaultNavActiveId = 1;

  constructor(
    public _butler:Butler,
    public dataApiService: DataApiService,
    ) { }
 getCards(){
    this.dataApiService.getAllCards().subscribe(response => {
    this.cards$ = response
    });
 }
  ngOnInit(): void { 
    this.getCards();
  }

  ngAfterViewInit(): void {

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
