import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-video-display',
  standalone: true,
  imports: [],
  templateUrl: './video-display.component.html',
  styleUrl: './video-display.component.css'
})
export class VideoDisplayComponent {

  idValue: string | null = null;
  safeUrl: SafeResourceUrl | null = null;
  arrayVal:any[]=[];
  videoTitle:string|null=null;
  videoChannelTitle:string|null=null;
  allMoviesArray:any[]=[];
  constructor(private route:ActivatedRoute, private sanitizer:DomSanitizer, private sharedService:SharedService){}

  ngOnInit(): void {
    this.idValue=this.route.snapshot.paramMap.get('id');
    const unsafeUrl=`https://www.youtube.com/embed/${this.idValue}`;
    this.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);


    this.sharedService.btnArray$.subscribe((data)=>{
      this.arrayVal=data;
      console.log("arrayVal from video-display", this.arrayVal);
    })


    this.sharedService.videoDetails$.subscribe((details)=>{
      this.videoTitle=details.item1;
      this.videoChannelTitle=details.item2;
      console.log("videoTitle",details );

    })

    this.sharedService.AllArray$.subscribe((arrayDetails)=>{
      this.allMoviesArray=arrayDetails;
      console.log("from video-display", this.allMoviesArray);
    })
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
