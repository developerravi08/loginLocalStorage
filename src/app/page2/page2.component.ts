import { Component, OnInit, Input } from '@angular/core';
import { AppSService } from '../app-s.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  @Input() add

  myname = ''
  constructor(private appSService: AppSService) { }

  ngOnInit() {
    
    this.appSService.showValueChanges(data => {
      console.log('data', data)
      this.add = data
      console.log('this.myname', this.myname)
    });

  }





}
