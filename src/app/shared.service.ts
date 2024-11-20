import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private btnArraySource = new BehaviorSubject<any[]>([]);
  btnArray$ = this.btnArraySource.asObservable();
  private videoTitleSource=new BehaviorSubject<{item1:string| null; item2:string| null}>({item1:null, item2:null});
  videoDetails$=this.videoTitleSource.asObservable();
  private AllArraySource=new BehaviorSubject<any[]>([]);
  AllArray$=this.AllArraySource.asObservable();
  // private videochannelTitleSource=new BehaviorSubject<string>("");
  // videochannelTitle$=this.videochannelTitleSource.asObservable();
  

  
  constructor() { }

  updateBtnArray(newArray: any[]) {
    this.btnArraySource.next(newArray); // Update the array
  }

  updateVideoDetails(item1: string|null, item2: string|null){
    this.videoTitleSource.next({item1, item2});
  }

  updateAllArrayDetails(ArrayDetails:any[]){
    this.AllArraySource.next(ArrayDetails);
  }
}
