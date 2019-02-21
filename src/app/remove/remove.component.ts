import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {


  count = 0
  constructor() { }

  ngOnInit() {
  }


  remove() {
    this.count += 1;
    console.log(' this.count', this.count)
  }

}
