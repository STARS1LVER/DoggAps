import { Component, OnInit } from '@angular/core';
import { DogsAppService } from './dogs-app/services/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dogApps';


  constructor(private dogService: DogsAppService) {}

  ngOnInit(): void {
    if( this.dogService.callApi() ){
      this.dogService.getObjectRace()
    }
  }


}
