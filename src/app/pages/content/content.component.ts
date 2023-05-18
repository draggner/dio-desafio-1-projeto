import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover: string = "../../../assets/1683561061810.jpg"
  @Input()
  cardTitle: string = "NOVO ANGULAR DEVELOPER"
  @Input()
  cardDescription: string = "A nova atualização e anunciamento do Framework Angular, os desevolvedores começaram a utilizar e esta sendo uma nova tendência de mercado."

  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get("id")))
  }
}
