import { Component, OnInit, Input } from '@angular/core';
import { RemoveComponent } from '../remove/remove.component';
import { AppSService } from '../app-s.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  @Input() addVal: RemoveComponent
  constructor(private appSService: AppSService) { }

  ngOnInit() {
  }

  Add() {

    this.addVal.remove();

    this.appSService.getValueChanges('Raviraj')

  }

}
