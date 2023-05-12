import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr-website',
  templateUrl: './qr-website.component.html',
  styleUrls: ['./qr-website.component.css']
})
export class QrWebsiteComponent {

  url:SafeUrl = ''
  onCodeChange(url: SafeUrl) {
    this.url = url;
    
  }


}
