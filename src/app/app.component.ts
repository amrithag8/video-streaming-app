import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { VideoDisplayComponent } from './video-display/video-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, HeaderComponent, MainContainerComponent, VideoDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-project';
  newConst:String='first app in angular';
  

//   setArrayval(value:any[]){
// this.arrayVal=value;
// console.log("arrayval", this.arrayVal);
//   }
}
