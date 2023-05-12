import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { QrWebsiteComponent } from './qr-website/qr-website.component';

const routes: Routes = [

  {
    path:'',component:DriverComponent
  },
  {
    path:'qr-website',component:QrWebsiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
