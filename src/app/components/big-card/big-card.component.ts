import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  // @Input()
  // photoCover: string = "../../../assets/1683561061810.jpg"
  // @Input()
  // cardTitle: string = "Nova atualização do Angular"
  // @Input()
  // cardDescription: string = "O framework Angular nos ultimos dias sofreu modificações e uma nova atualização do Angular foi estabelecida, com novas funcionalidades e tendências de uso para os desenvolvedores Angular. Diante a esse fato..."

  @Input()
  photoCover: string = "../../../assets/1683561061810.jpg"
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
}
