import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { CollapsedSidebarComponent } from '../collapsed-sidebar/collapsed-sidebar.component';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [SidebarComponent, RouterLink, CollapsedSidebarComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {
userList:any;
btnArray:any[]=["All", "Music", "Podcasts", "Tamil Cinema", "News", "Malayalam Cinema", "Data Type", "ASP.NET", "Weddings", "Shopping", "Live", "Comedy", "Recently uploaded", "Game shows", "Watched"]
private API_URL = 'https://youtube.googleapis.com/youtube/v3/videos';
private API_KEY = 'AIzaSyCQMTAq_tPpLnUZvu4a8Lgy-mJBy3dKSys';
// @Output()sendbtnArray: EventEmitter<any[]> =new EventEmitter<any[]>();
    



  constructor(private http:HttpClient, private sharedService: SharedService){

  }

  getAllUsers(){
    
    const url=`${this.API_URL}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${this.API_KEY}`;
    this.http.get(url).subscribe((result:any)=>{
      this.userList=result.items;
       console.log("res", result.items);
       this.sharedService.updateAllArrayDetails(result.items);
      
    })
  }

  ngOnInit(){
    this.getAllUsers();
    this.sharedService.updateBtnArray(this.btnArray);
    
  }

  videoDetailsHandler(item1:string|null,item2:string|null ){
    this.sharedService.updateVideoDetails(item1, item2);

    console.log("from videoDetailsHandler", item1, item2);
  }

  scrollRighthandler() {
    const btnItems = document.getElementById('btn-items');
    if (btnItems) {
      btnItems.scrollLeft -= 200; 
    }
  }

  scrollLeftthandler(){
    const btnItems = document.getElementById('btn-items');
    if (btnItems) {
      btnItems.scrollLeft += 200; 
    }
  }
}
