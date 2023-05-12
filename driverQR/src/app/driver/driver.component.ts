import { Component } from '@angular/core';
import * as qrcode from 'qrcode';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
 
  drivers: Driver[] = [];
 
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchDrivers();
  }

  fetchDrivers() {
    this.http.get<Driver[]>('http://localhost:8093/drivers').subscribe(
      data => {
        this.drivers = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  generateQRCode(driver: Driver) {
    const details = `Name: ${driver.name} \n dob:${driver.dob} \n License: ${driver.license} \n Address: ${driver.address} \n City: ${driver.city} \n Pin:${driver.pin} \n State: ${driver.state} \n Country:${driver.country}`;
    console.log(details);

    qrcode.toCanvas(details, { errorCorrectionLevel: 'H', margin: 2 }, (err, canvas) => {
      if (err) throw err;
      
      var popup:any = window.open();
      popup.document.body.appendChild(canvas);
    });
  }
}

class Driver {
  id: number;
  name: string;
  dob:string;
  license: string;
  address: string;
  city:string;
  pin:number;
  state:string;
  country:string;

  constructor(id: number, name: string, dob: string ,license: string,address: string,city:string ,pin:number,state:string,country:string) {
    this.id = id;
    this.name = name;
    this.dob=dob;
    this.license = license;
    this.address = address;
    this.city=city;
    this.pin=pin;
    this.state=state;
    this.country=country;
  } 
}
