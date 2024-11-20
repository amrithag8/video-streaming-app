import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { VideoDisplayComponent } from './video-display/video-display.component';

export const routes: Routes = [
    {path: '', component: MainContainerComponent},
    {path: 'display-videos/:id', component: VideoDisplayComponent},
];
