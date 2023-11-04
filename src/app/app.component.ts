import { Component } from '@angular/core';
import { faHome, faFileLines, faBasketShopping, faList, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ListMarket';

  faHome = faHome;
  faFileLines = faFileLines;
  faBasketShopping = faBasketShopping;
  faList = faList;
  faRulerHorizontal = faRulerHorizontal;
}