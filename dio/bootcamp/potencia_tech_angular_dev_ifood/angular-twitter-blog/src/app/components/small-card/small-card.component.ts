import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "../../../assets/1683561061810.jpg"
  @Input()
  cardTitle: string = ""
  @Input()
  Id:string =""
}
